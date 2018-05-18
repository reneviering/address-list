import React from 'react';

import './ActionBar.css';

function ActionBar ({ children }) {
  return (
    <div className="action-bar text-right">
      { children }
    </div>
  );
}

export default ActionBar;
