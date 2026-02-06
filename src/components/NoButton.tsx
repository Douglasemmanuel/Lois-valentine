import React from "react";

interface NoButtonProps {
  label: string;
  backgroundColor?:string;
  color?:string;
  onClick: () => void;
}

const NoButton: React.FC<NoButtonProps> = ({ label, onClick , color , backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "1rem 2rem",
        backgroundColor: backgroundColor,
        color: color,
        border: "none",
        borderRadius: "1.5rem",
        cursor: "pointer",
         fontSize: "1.5rem",     
        lineHeight: "1",  
      }}
    >
      {label}
    </button>
  );
};

export default NoButton;
