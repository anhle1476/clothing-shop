import React, { Component } from "react";
import { connect } from "react-redux";

import { SignUpContainer, Title } from "./sign-up.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.action";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      return alert("Password don't match");
    }

    signUpStart(email, password, displayName);
  };

  render() {
    return (
      <SignUpContainer onSubmit={this.handleSubmit}>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form'>
          <FormInput
            name='displayName'
            type='text'
            label='Name'
            value={this.state.displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            label='Confirm Password'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
