/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { KudoCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createKudo
// ====================================================

export interface createKudo_createKudo_User_from {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface createKudo_createKudo_User_to {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface createKudo_createKudo {
  __typename: "Kudo";
  id: string;
  message: string;
  createdAt: any;
  updatedAt: any;
  User_from: createKudo_createKudo_User_from;
  User_to: createKudo_createKudo_User_to;
}

export interface createKudo {
  createKudo: createKudo_createKudo;
}

export interface createKudoVariables {
  input: KudoCreateInput;
}
