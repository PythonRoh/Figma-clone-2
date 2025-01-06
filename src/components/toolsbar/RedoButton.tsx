import IconButton from "./IconButton";

export default function RedoButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M15 4.5V2l6 5-6 5V8.5c-3.87 0-7 3.13-7 7s3.13 7 7 7h1v2h-1c-4.97 0-9-4.03-9-9s4.03-9 9-9z" />
      </svg>
    </IconButton>
  );
}
