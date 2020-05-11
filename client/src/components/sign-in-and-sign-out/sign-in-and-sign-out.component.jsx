import React from "react";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import { SignInAndSignOutContainer } from "./sign-in-and-sign-out.styles";

export default function SignInAndSignOut() {
  return (
    <SignInAndSignOutContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignOutContainer>
  );
}
