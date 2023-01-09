import React from "react";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";

function Slides() {
  return (
    <div >
      <div className="ml-32 absolute mt-28 w-[60%] h-[70%] rounded">
        <Slider1/>
      </div>
    </div>
  );
}

export default Slides;
