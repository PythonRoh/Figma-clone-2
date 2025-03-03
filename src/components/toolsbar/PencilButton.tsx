import IconButton from "./IconButton";

export default function PencilButton({
    isActive,
    onClick,
}: {
    isActive: boolean,
    onClick: () => void,
}) {
    return (
        <IconButton isActive={isActive} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5l-4 1 1-4L16.5 3.5z" />
            </svg>
        </IconButton>

    );
}