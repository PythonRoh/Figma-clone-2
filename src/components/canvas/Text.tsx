import { useMutation } from "@liveblocks/react";
import { useEffect, useRef, useState } from "react";
import { TextLayer } from "~/types";
import { rgbToHex } from "~/utils";

export default function Text({ id, layer, onPointerDown}: { id: string; layer: TextLayer ;onPointerDown: (e: React.PointerEvent, layerId: string) => void;}) {
  const {
    x,
    y,
    width,
    height,
    text,
    fontSize,
    fill,
    stroke,
    opacity,
    fontFamily,
    fontWeight,
  } = layer;

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const updateText = useMutation(
    ({ storage }, newText: string) => {
      const liveLayers = storage.get("layers");
      const layer = liveLayers.get(id);
      if (layer) {
        layer.update({ text: newText });
      }
    },
    [id],
  );

  const handleBlur = () => {
    setIsEditing(false);
    updateText(inputValue); // Save to liveblocks storage
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      updateText(inputValue); // Save to liveblocks storage
    }
  };

  return (
    <g className="group" onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <foreignObject x={x} y={y} width={width} height={height}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
              fontSize: `${fontSize}px`,
              color: rgbToHex(fill),
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          />
        </foreignObject>
      ) : (

        <>
        <rect
       style={{ transform: `translate(${x}px, ${y}px)` }}
        width={width}
        height={height}
        fill="none"
        stroke="#0b99ff"
        strokeWidth="1"
        className="pointer-events-none opacity-0 group-hover:opacity-100"
      />
        <text
          onPointerDown={(e) => onPointerDown(e, id)}
          x={x}
          y={y + fontSize}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          fill={rgbToHex(fill)}
          stroke={rgbToHex(stroke)}
          opacity={opacity}
          
          style={{
            userSelect: "none",
            // pointerEvents: "none", // Prevents interaction while drawing
          }}
        >
          {text}
        </text>
        </>
      )}
    </g>
  );
}