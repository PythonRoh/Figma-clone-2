import { Color } from "~/types";
import { getStroke } from "perfect-freehand"; //npm install perfect-freehand
import { getSvgPathFromStroke, rgbToHex } from "~/utils";

export default function Path({
  x,
  y,
  stroke,
  fill,
  opacity,
  points,
  onPointerDown,
}: {
  x: number;
  y: number;
  stroke?: string;
  fill: string;
  opacity: number;
  points: number[][];
  onPointerDown?: (e: React.PointerEvent) => void;
}) {
  const pathData = getSvgPathFromStroke(
    getStroke(points, {
      size: 16,
      thinning: 0.5,
      smoothing: 0.5,
      streamline: 0.5,
    }),
  );

  return (
    <g className="group">
      <path
        style={{ transform: `translate(${x}px, ${y}px)` }}
        d={pathData}
        fill="none"
        stroke="#0b99ff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none opacity-0 group-hover:opacity-100"
      />
      <path
        onPointerDown={onPointerDown}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        d={pathData}
        fill={fill}
        stroke={stroke ?? "#CCC"}
        strokeWidth={1}
        opacity={`${opacity ?? 100}%`}
      />
    </g>
  );
}