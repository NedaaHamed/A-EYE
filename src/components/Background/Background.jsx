/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Background = ({ property1 }) => {
  return (
    <img
      className="background"
      alt="Property default"
      src={
        property1 === "variant-1"
          ? "https://c.animaapp.com/hmXbglH2/img/property-1-variant1@2x.png"
          : "https://c.animaapp.com/hmXbglH2/img/background-7@2x.png"
      }
    />
  );
};

Background.propTypes = {
  property1: PropTypes.oneOf(["variant-1", "default"]),
};
