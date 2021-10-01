export default function Checkbox({
  label,
  onChange,
  value,
  checked,
  inputProps,
}) {
  return (
    <label>
      <input
        type='checkbox'
        {...inputProps}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      {label}
    </label>
  );
}
