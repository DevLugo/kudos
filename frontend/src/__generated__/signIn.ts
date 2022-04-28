/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignInInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn_signIn_user_organization {
  __typename: "Organization";
  name: string;
}

export interface signIn_signIn_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  organization: signIn_signIn_user_organization | null;
}

export interface signIn_signIn {
  __typename: "SignInOutput";
  token: string;
  user: signIn_signIn_user;
}

export interface signIn {
  signIn: signIn_signIn;
}

export interface signInVariables {
  input: SignInInput;
}
