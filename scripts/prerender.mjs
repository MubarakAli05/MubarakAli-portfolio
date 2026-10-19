import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = new URL("../dist/index.html", import.meta.url);
const server = await createServer({
  root,
  server: { middlewareMode: true, watch: null },
  appType: "custom",
});

try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const markup = renderToString(React.createElement(App));
  const template = await readFile(output, "utf8");
  const placeholder = '<div id="root"></div>';
  if (!template.includes(placeholder)) {
    throw new Error("The build HTML is missing the root placeholder.");
  }
  await writeFile(output, template.replace(placeholder, () => `<div id="root">${markup}</div>`));
  console.log("Prerendered portfolio content into dist/index.html.");
} finally {
  await server.close();
}
