import React from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <img
      class="gray-img"
      src={props.img_url}
      alt=""
    ></img>
  );
};

export default GrayImg;
