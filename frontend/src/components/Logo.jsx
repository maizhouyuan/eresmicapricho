import React from "react";
import YarnBall from "../assets/icons/yarnball.png";

const Logo = () => {
  const greenDots = [
    { top: "10px", left: "20px" },
    { top: "30px", left: "50px" },
    { top: "50px", left: "80px" },
  ];

  return (
    <div className="logo-container">
      <img src={YarnBall} alt="Yarn Ball" className="logo-image" />
      <h1 className="logo-text">
        Maizhou
        {greenDots.map((dot, index) => (
          <span 
            key={index} 
            className="green-dot" 
            style={{ top: dot.top, left: dot.left }}
          ></span>
        ))}
      </h1>
    </div>
  );
};

export default Logo;