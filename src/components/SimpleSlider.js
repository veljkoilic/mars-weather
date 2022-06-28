import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// > 1400 = 3 <1400 = 2 < 800 = 1
export default function SimpleSlider(props) {
  return (
    <Slider {...props.settings} className="forecast" onRes>
            {props.sols}
    </Slider>
  );
}