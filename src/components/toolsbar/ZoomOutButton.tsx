import IconButton from "./IconButton";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
export default function ZoomInButton({
    onClick, 
    disabled
}:{
    onClick: () => void; 
    disabled: boolean;
}) {
    return (<IconButton onClick={onClick} disabled={disabled}>
        <AiOutlineZoomOut size={22} color="#888888"/></IconButton>

    );
}