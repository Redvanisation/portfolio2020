import React from 'react';

import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={darkMode.disable} className={!darkMode.value ? 'hidden' : ''}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable} className={darkMode.value ? 'hidden' : ''}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
