import * as dayjs from "dayjs";

export default function getCurrentDate() {
  return dayjs().locale("hr").format("MMMM DD YYYY, HH:mm:ss");
}
