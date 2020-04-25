import React from "react";
import "../../css/custom-button.style.min.css";

export default function CustomButton({ children, ...otherProps }) {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
}
