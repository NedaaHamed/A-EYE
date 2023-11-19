/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UnlockTheDoorTo = ({ property1, className }) => {
  return (
    <img
      className={`UNLOCK-THE-DOOR-TO ${property1} ${className}`}
      alt="Property default"
      src={
        property1 === "variant-2"
          ? "https://c.animaapp.com/hmXbglH2/img/property-1-variant2.png"
          : "https://c.animaapp.com/hmXbglH2/img/-unlock-the-door-to-boundless-creativity-.png"
      }
    />
  );
};

UnlockTheDoorTo.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
