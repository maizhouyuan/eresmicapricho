import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="background"></div>
      {children}
    </div>
  );
};

export default Layout;
