import * as dayjs from "dayjs";
import { nanoid } from "nanoid";

export function getCurrentDate() {
  return dayjs().locale("hr").format("MMMM DD YYYY, HH:mm:ss");
}

export function getId() {
  return nanoid();
}
