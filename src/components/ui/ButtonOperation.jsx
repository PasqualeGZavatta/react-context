export default function ButtonOperation({
  label,
  onClick,
  disabled,
  color = "btn-info",
}) {
  return (
    <button
      className={`btn ${color} m-1 px-3 `}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
}
