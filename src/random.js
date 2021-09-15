export function getRandomName() {
  const names = ["Šime", "Jure", "Mate", "Roko", "Frane", "Stipe"];

  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names[randomIndex];
  return name;
}

export function getRandomColor() {
  const colors = [
    "plava",
    "žuta",
    "crvena",
    "zelena",
    "narančasta",
    "ljubičasta",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  return color;
}

const RANDOM = "RANDOM";
export default RANDOM;
