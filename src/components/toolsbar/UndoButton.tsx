import IconButton from "./IconButton";

export default function UndoButton({
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
        <path d="M9 4.5V2l-6 5 6 5V8.5c3.87 0 7 3.13 7 7s-3.13 7-7 7h-1v2h1c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
      </svg>
    </IconButton>
  );
}
