import React from "react";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-center mb-4">{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;
