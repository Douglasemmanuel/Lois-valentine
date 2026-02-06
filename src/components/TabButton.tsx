import React from "react";

interface TabButtonProps {
  label: string;
  backgroundColor?:string;
  color?:string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, onClick , color , backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "1rem 1.2rem",
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

export default TabButton;
