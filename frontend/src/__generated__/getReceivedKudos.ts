/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getReceivedKudos
// ====================================================

export interface getReceivedKudos_getReceivedKudos_User_from {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface getReceivedKudos_getReceivedKudos_User_to {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface getReceivedKudos_getReceivedKudos {
  __typename: "Kudo";
  id: string;
  message: string;
  createdAt: any;
  updatedAt: any;
  User_from: getReceivedKudos_getReceivedKudos_User_from;
  User_to: getReceivedKudos_getReceivedKudos_User_to;
}

export interface getReceivedKudos {
  getReceivedKudos: getReceivedKudos_getReceivedKudos[];
}
