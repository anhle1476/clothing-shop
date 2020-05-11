import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.style";

const FormInput = ({ label, handleChange, value, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel className={`${value.length ? "shrink" : ""}`}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
