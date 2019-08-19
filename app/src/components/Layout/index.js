import React, { useState } from "react";

// Styles
import "./index.css";

// Component
const Layout = ({ children }) => {
  return (
    <div className="bcredi layout">
      {children}
    </div>
  );
};

export default Layout;
