/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: kudoFields
// ====================================================

export interface kudoFields_User_from {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface kudoFields_User_to {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface kudoFields {
  __typename: "Kudo";
  id: string;
  message: string;
  createdAt: any;
  updatedAt: any;
  User_from: kudoFields_User_from;
  User_to: kudoFields_User_to;
}
