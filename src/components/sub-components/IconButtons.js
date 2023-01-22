import React from "react";
import "./IconButtons.css";

function IconButtons({ Icon, title, color }) {
  return (
    <div className="icons">
      <span style={{ color: color }}>{Icon}</span>
      <p>{title}</p>
    </div>
  );
}

export default IconButtons;
