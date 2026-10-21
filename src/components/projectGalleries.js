const imageSets = {
  "Testing Lighting": [
    ["light2.jpeg", "Blue-hour house lighting render"],
    ["light3.jpeg", "Daylight variation of the house scene"],
    ["light4.jpeg", "Night lighting variation of the house scene"],
    ["light1.jpeg", "House scene setup in the Blender viewport"],
    ["light5.jpeg", "Rocky landscape lighting study"],
  ],
  "Cafe Architecture": [
    ["arch1.jpeg", "Finished café interior render"],
    ["arch2.jpeg", "Café lighting and materials in Blender"],
    ["arch3.jpeg", "Café geometry in the Blender viewport"],
  ],
  "Home Architecture": [
    ["archh1.jpeg", "Finished home interior render"],
    ["archh2.jpeg", "Home interior lighting in Blender"],
    ["archh3.jpeg", "Home interior geometry in the Blender viewport"],
  ],
  "Modern Living Room": [
    ["archhh1.jpeg", "Finished living room render"],
    ["archhh2.jpeg", "Living room geometry in the Blender viewport"],
  ],
  "Gaming Environment": [
    ["game1.jpeg", "Finished game environment render"],
    ["game2.jpeg", "Game environment lighting and materials in Blender"],
    ["game3.jpeg", "Game environment geometry in the Blender viewport"],
  ],
  "Atmospheric Lighting": [
    ["atmosp1.jpeg", "Finished blue-hour architectural landscape"],
    ["atmosp2.jpeg", "Atmospheric landscape lighting in Blender"],
    ["atmosp3.jpeg", "Landscape geometry and scene layout in Blender"],
  ],
  "Last of Environment": [
    ["ev1.jpeg", "Finished environment render"],
    ["ev2.jpeg", "Environment scene setup in Blender"],
  ],
  "Class Room": [
    ["cl1.jpeg", "Finished classroom lighting render"],
    ["cl2.jpeg", "Classroom geometry and materials in Blender"],
  ],
  "Beyond the Mountains": [
    ["atmos1.jpeg", "Finished misty railway landscape"],
    ["atmos2.jpeg", "Railway landscape scene setup in Blender"],
  ],
};

export const projectGalleries = Object.fromEntries(
  Object.entries(imageSets).map(([title, images]) => [
    title,
    images.map(([filename, description]) => ({
      image: `/blender/${filename}`,
      title,
      description,
    })),
  ]),
);
