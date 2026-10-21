import assert from "node:assert/strict";
import { readFile, access, stat } from "node:fs/promises";
import test from "node:test";

const dist = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("index.html", dist), "utf8");
const origin = "https://mubarak-ali-portfolio.vercel.app/";
const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(([tag]) => tag);

function metadata(name) {
  const tag = tags.find((tag) => tag.includes(`name="${name}"`) || tag.includes(`property="${name}"`));
  return tag?.match(/content="([^"]*)"/)?.[1];
}

test("unique title, description, canonical, and indexable English document", () => {
  assert.equal([...html.matchAll(/<title>/g)].length, 1);
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<title>Mubarak Ali/);
  assert.ok(metadata("description").length >= 100);
  assert.ok(metadata("description").length <= 170);
  assert.equal(tags.filter((tag) => tag.includes('rel="canonical"')).length, 1);
  assert.ok(tags.some((tag) => tag.includes('rel="canonical"') && tag.includes(`href="${origin}"`)));
  assert.match(metadata("robots"), /index, follow/);
});

test("portfolio content is available without executing JavaScript", () => {
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1);
  assert.equal([...html.matchAll(/<main(?:\s|>)/g)].length, 1);
  for (const id of ["home", "about", "skills", "projects", "web-projects", "aiml-projects", "contact"]) {
    assert.ok(html.includes(`id="${id}"`), `Missing section: ${id}`);
  }
  assert.match(html, /When to Wander/);
  assert.match(html, /Full Stack/);
  assert.match(html, /AI\/ML Engineering/);
  assert.match(html, /Currently Learning/);
  assert.match(html, /Agrivo/);
  assert.match(html, /In development/);
  assert.doesNotMatch(html, /<h3>Animation<\/h3>|<h3>UI\/UX<\/h3>|Digital Flex Printing Website/);
  assert.doesNotMatch(html, /opacity:0/);
});

test("all nine original 3D works remain in the prerendered carousel", () => {
  assert.match(html, /id="three-d-carousel"/);
  assert.match(html, /aria-roledescription="carousel"/);
  for (const title of ["Testing Lighting", "Cafe Architecture", "Home Architecture", "Modern Living Room", "Gaming Environment", "Atmospheric Lighting", "Last of Environment", "Class Room", "Beyond the Mountains"]) {
    assert.ok(html.includes(`<h3>${title}</h3>`), `Missing 3D work: ${title}`);
  }
  assert.match(html, /aria-label="Previous 3D project"/);
  assert.match(html, /aria-label="Next 3D project"/);
});

test("animated content keeps readable static text without a motion toggle", () => {
  assert.match(html, /<h1 aria-label="Building cinematic digital experiences\."/);
  assert.match(html, /class="project-counter" aria-hidden="true">15\+/);
  assert.match(html, /class="sr-only">Frontend &amp; Full Stack Developer · 3D Artist/);
  assert.doesNotMatch(html, /motion-toggle|Pause motion|Resume motion/);
  for (const title of ["Creative Thinking", "Frontend Focus", "3D Visual Style"]) {
    assert.ok(html.includes(`<h4>${title}</h4>`));
  }
  assert.doesNotMatch(html, /data-loading="true"/);
});

test("section interactions retain accessible controls and honest project status", () => {
  assert.doesNotMatch(html, /aria-label="About timeline"|class="story-dots"|class="story-indicator"/);
  assert.doesNotMatch(html, /aria-label="Read (?:Creative Thinking|Frontend Focus|3D Visual Style)"/);
  assert.equal([...html.matchAll(/aria-controls="skill-spotlight"/g)].length, 4);
  assert.match(html, /id="skill-spotlight" aria-live="polite"/);
  assert.equal([...html.matchAll(/<details>/g)].length, 3);
  assert.match(html, /PLANNED CAPABILITIES/);
  for (const field of ["name", "email", "message"]) {
    assert.ok(html.includes(`for="contact-${field}"`));
    assert.ok(html.includes(`id="contact-${field}"`));
  }
  assert.match(html, /class="back-to-top" href="#home"/);
});

test("structured data consistently identifies the portfolio owner", () => {
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(json, "Missing structured data");
  const schema = JSON.parse(json);
  assert.equal(schema["@context"], "https://schema.org");
  const graph = schema["@graph"];
  const person = graph.find((item) => item["@type"] === "Person");
  const profile = graph.find((item) => item["@type"] === "ProfilePage");
  assert.equal(person.name, "Mubarak Ali");
  assert.equal(profile.mainEntity["@id"], person["@id"]);
  assert.ok(person.sameAs.includes("https://github.com/MubarakAli05"));
  assert.ok(person.sameAs.includes("https://www.linkedin.com/in/mubarak5"));
  assert.ok(graph.every((item) => item.url === origin));
});

test("social sharing metadata uses accessible absolute image URLs", async () => {
  assert.equal(metadata("og:url"), origin);
  assert.equal(metadata("twitter:card"), "summary_large_image");
  for (const name of ["og:title", "og:description", "og:image:alt", "twitter:title", "twitter:description", "twitter:image:alt"]) {
    assert.ok(metadata(name), `Missing ${name}`);
  }
  for (const name of ["og:image", "twitter:image"]) {
    const url = new URL(metadata(name));
    assert.equal(url.origin, new URL(origin).origin);
    await access(new URL(url.pathname.slice(1), dist));
  }
});

test("project and social links reflect the requested destinations", () => {
  assert.match(html, /href="https:\/\/whentowander\.vercel\.app\/"/);
  assert.match(html, /href="https:\/\/github\.com\/MubarakAli05\/WhentoWander"/);
  assert.match(html, /<h3>AI Assistant<\/h3>/);
  assert.match(html, /href="https:\/\/github\.com\/MubarakAli05\/NEXUS"/);
  assert.match(html, /src="\/web\/ai-assistant-cover\.svg"/);
  assert.doesNotMatch(html, /Increnity|increnity\.vercel\.app|<h3>NEXUS<\/h3>/);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/mubarak5"/);
  assert.doesNotMatch(html, /github\.com\/mubarak23523|mubarak-s-9a374a307|chennaidigitalprinting/);
});

test("local image assets exist and reserve layout space", async () => {
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map(([tag]) => tag);
  assert.equal(images.length, 15);
  for (const image of images) {
    if (image.includes('aria-hidden="true"')) assert.match(image, /alt=""/);
    else assert.match(image, /alt="[^"]+"/);
    assert.match(image, /width="\d+"/);
    assert.match(image, /height="\d+"/);
    const src = image.match(/src="([^"]+)"/)[1];
    if (src.startsWith("/")) await access(new URL(src.slice(1), dist));
    if (image.includes('class="project-image"')) assert.match(image, /loading="lazy"/);
  }
  assert.match(html, /fetchPriority="high"/i);
  assert.ok((await stat(new URL("portrait.jpg", dist))).size < 200_000);
});

test("folded-ribbon branding is available for navigation, browser icons, and sharing", async () => {
  assert.ok(tags.some((tag) => tag.includes('rel="icon"') && tag.includes('href="/logo.svg"')));
  assert.match(html, /<img[^>]+src="\/logo\.svg"[^>]+alt=""/);
  const logo = await readFile(new URL("logo.svg", dist), "utf8");
  assert.equal([...logo.matchAll(/<path\b/g)].length, 3);
  assert.doesNotMatch(logo, /<text\b/);
  for (const [file, width, height] of [
    ["favicon-64.png", 64, 64],
    ["apple-touch-icon.png", 180, 180],
    ["social-preview.png", 1200, 630],
  ]) {
    const image = await readFile(new URL(file, dist));
    assert.equal(image.subarray(1, 4).toString(), "PNG");
    assert.equal(image.readUInt32BE(16), width);
    assert.equal(image.readUInt32BE(20), height);
  }
  assert.equal(metadata("og:image"), `${origin}social-preview.png`);
  assert.equal(metadata("twitter:image"), metadata("og:image"));
  assert.equal(metadata("og:image:width"), "1200");
  assert.equal(metadata("og:image:height"), "630");
});

test("internal anchors resolve to existing sections", () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.has(match[1]), `Missing anchor target: ${match[1]}`);
  }
});

test("robots and sitemap use the canonical production origin", async () => {
  const robots = await readFile(new URL("robots.txt", dist), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml", dist), "utf8");
  assert.ok(robots.includes(`Sitemap: ${origin}sitemap.xml`));
  assert.doesNotMatch(robots, /Disallow:\s*\/\s*$/m);
  assert.ok(sitemap.includes(`<loc>${origin}</loc>`));
});
