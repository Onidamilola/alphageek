import React from 'react';

const CompleteVisitButton = ({ Loading }) => {
  const buttonStyle = {
    backgroundColor: '#4568dc',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.7em 2em',
    borderRadius: '0.5rem',
    cursor: Loading ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    outline: 'none',
    position: 'relative', // Ensure position is relative for loading text
  };

  const hoverStyle = {
    backgroundColor: '#b06ab3',
  };

  const loadingTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <button
      type="submit"
      style={buttonStyle}
      className="hover:bg-blue-700"
      onMouseEnter={(e) => e.target.style.backgroundColor = "#b06ab3"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#4568dc"}
    >
      {Loading ? "loading...." : "Complete Vist"}
    </button>
  );
};

export default CompleteVisitButton;
