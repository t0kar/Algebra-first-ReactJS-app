export default function getRandomColor() {
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
