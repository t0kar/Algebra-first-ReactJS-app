import { getRandomName, getRandomColor } from "../random";

const userColor = getRandomColor();
export default function UserInfo() {
  return (
    <p>
      I am {getRandomName()} and my favorite color is{" "}
      <span style={{ color: userColor }}>{userColor}</span>.
    </p>
  );
}
