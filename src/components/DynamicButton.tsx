import React from "react";

interface DynamicButtonProps {
  label: string;
  backgroundColor?:string;
  color?:string;
  onClick: () => void;
  padding?: string;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ label, onClick , color , backgroundColor ,   padding = "1rem 1.5rem" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: padding,
        backgroundColor: backgroundColor,
        color: color,
        border: "none",
        borderRadius: "1.5rem",
        cursor: "pointer",
         fontSize: "1.5rem",     
        lineHeight: "1",  
          fontFamily: 'poppins, sans-serif;'
      }}
    >
      {label}
    </button>
  );
};

export default DynamicButton;
