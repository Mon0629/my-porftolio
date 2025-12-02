import React from "react";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  color?: string; // Tailwind color class
  thickness?: string; // Tailwind height or width class
  length?: string; // Tailwind width or height class
  className?: string; 
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  color = "bg-gray-300",
  thickness = "h-px",
  length = "w-full",
  className = "",
}) => {
  return orientation === "horizontal" ? (
    <div className={`${color} ${thickness} ${length} ${className}`} />
  ) : (
    <div className={`${color} ${thickness} ${length} ${className} inline-block`} />
  );
};
