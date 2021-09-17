export default function getRandomColor() {
  const colors = ["blue", "yellow", "red", "green", "orange", "purple"];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  return color;
}
