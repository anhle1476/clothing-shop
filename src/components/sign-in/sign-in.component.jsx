import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { SignInContainer, Title, Buttons } from "./sign-in.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error);
    }
  };

  handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer onSubmit={this.handleSubmit}>
        <Title>I already have an account</Title>
        <span>Sign in with email and password</span>
        <form className='sign-in-form'>
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
          <Buttons>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={this.handleSignInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
