import React from 'react';

const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;