import { gql } from "@apollo/client";

export const userFields = gql`
  fragment userFields on User {
    id
    email
    firstName
    lastName
  }
`;

export const kudoFields = gql`
  fragment kudoFields on Kudo {
    id
    message
    createdAt
    updatedAt
    User_from{
      ...userFields
    }
    User_to{
      ...userFields
    }
  }
  ${userFields}
`;

export const AsignedKudoFields = gql`
  fragment AsignedKudoFields on AsignedKudo {
    id
    createdAt
    updatedAt
    status
    userFromR{
      ...userFields
    }
    userToR{
      ...userFields
    }
  }
  ${userFields}
`;