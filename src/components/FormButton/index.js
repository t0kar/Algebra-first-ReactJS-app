export default function FormButton({ label, buttonProps }) {
  return (
    <button type='submit' {...buttonProps}>
      {label}
    </button>
  );
}
