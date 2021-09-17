import { getRandomName, getRandomColor } from "../random";

export default function UserInfo() {
  return (
    <p>
      Ja sam {getRandomName()} i moja najdraža boja je {getRandomColor()}.
    </p>
  );
}
