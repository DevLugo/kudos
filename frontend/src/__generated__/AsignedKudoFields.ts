/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AsignedKudosStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: AsignedKudoFields
// ====================================================

export interface AsignedKudoFields_userFromR {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AsignedKudoFields_userToR {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AsignedKudoFields {
  __typename: "AsignedKudo";
  id: string;
  createdAt: any;
  updatedAt: any;
  status: AsignedKudosStatus;
  userFromR: AsignedKudoFields_userFromR;
  userToR: AsignedKudoFields_userToR;
}
