import React from "react";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import "../../css/sign-in-and-sign-out.style.min.css";

export default function SignInAndSignOut() {
  return (
    <div className='sign-in-and-sign-out'>
      <SignIn />
      <SignUp />
    </div>
  );
}
