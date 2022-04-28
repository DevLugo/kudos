/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AsignedKudosStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: getAsignedKudos
// ====================================================

export interface getAsignedKudos_getAsignedKudos_userFromR {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface getAsignedKudos_getAsignedKudos_userToR {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface getAsignedKudos_getAsignedKudos {
  __typename: "AsignedKudo";
  id: string;
  createdAt: any;
  updatedAt: any;
  status: AsignedKudosStatus;
  userFromR: getAsignedKudos_getAsignedKudos_userFromR;
  userToR: getAsignedKudos_getAsignedKudos_userToR;
}

export interface getAsignedKudos {
  getAsignedKudos: getAsignedKudos_getAsignedKudos[];
}
