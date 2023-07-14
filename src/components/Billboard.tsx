import React from "react";
import "./style.css";

function Billboard() {
  return (
    <>
      <div
        id="backgroundBlur"
        className="-z-50 absolute md:max-lg::h-[65rem] w-full object-contain"
      >
        <img id="billboardLogo" src="src/assets/BBT_bg.jpg" />
      </div>
    </>
  );
}

export default Billboard;
