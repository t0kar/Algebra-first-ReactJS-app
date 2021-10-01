export default function TextInput({ label, onChange, value, inputProps }) {
  return (
    <label>
      {label}
      <input type='text' {...inputProps} onChange={onChange} value={value} />
    </label>
  );
}
