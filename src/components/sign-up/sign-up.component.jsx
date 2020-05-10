import React, { useState } from "react";
import { connect } from "react-redux";

import { SignUpContainer, Title } from "./sign-up.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = ({ target: { name, value } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("Password don't match");
    }

    signUpStart(email, password, displayName);
  };

  return (
    <SignUpContainer onSubmit={handleSubmit}>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form'>
        <FormInput
          name='displayName'
          type='text'
          label='Name'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
