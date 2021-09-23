import { getRandomName, getRandomColor } from '../random';
import Greet from './Greet';

export default function UserInfo() {
  const userColor = getRandomColor();
  return (
    <Greet greeting='Hello' name={getRandomName()}>
      My favorite color is <span style={{ color: userColor }}>{userColor}</span>
      .
    </Greet>
  );
}
