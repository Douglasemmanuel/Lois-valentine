import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '8px 12px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#eee',
      }}
    >
      <FaArrowLeft /> Back
    </button>
  );
};

export default BackButton;
