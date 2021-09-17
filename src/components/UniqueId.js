import { getId } from "../helpers";

export default function UniqueId() {
  return (
    <p>
      Tvoj jedinstveni identifikator je <strong>{getId()}</strong>.
    </p>
  );
}
