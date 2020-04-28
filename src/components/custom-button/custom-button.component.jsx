import React from "react";
import "../../css/custom-button.style.min.css";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
