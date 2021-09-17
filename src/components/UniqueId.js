import { getId } from "../helpers";

export default function UniqueId() {
  return (
    <p>
      Your ID is <strong>{getId()}</strong>.
    </p>
  );
}
