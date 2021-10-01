export default function Checkbox({
  label,
  onChange,
  value,
  checked,
  checkboxProps,
}) {
  return (
    <label>
      <input
        type='checkbox'
        {...checkboxProps}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      {label}
    </label>
  );
}
