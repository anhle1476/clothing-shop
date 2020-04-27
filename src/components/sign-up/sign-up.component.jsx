import React, { Component } from "react";
import "../../css/sign-up.style.min.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return alert("Password don't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      this.props.history.push("/");
    } catch (error) {
      console.log(error.code, error.message);
    }

    console.log("submit");
  };

  render() {
    return (
      <div className='sign-up' onSubmit={this.handleSubmit}>
        <h2 className='title'>I do not have an account</h2>
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
      </div>
    );
  }
}

export default SignUp;
