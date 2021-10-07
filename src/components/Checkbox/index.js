export default function Checkbox({
  label,
  onChange,
  value,
  checked,
  checkboxProps,
}) {
  return (
    <div className='Checkbox'>
      <label>
        <input
          {...checkboxProps}
          type='checkbox'
          onChange={onChange}
          value={value}
          checked={checked}
        />
        {label}
      </label>
    </div>
  );
}
