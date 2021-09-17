export default function getRandomName() {
  const names = ["Šime", "Jure", "Mate", "Roko", "Frane", "Stipe"];

  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names[randomIndex];
  return name;
}
