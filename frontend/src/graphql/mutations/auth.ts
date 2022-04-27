import { gql } from "@apollo/client";

export const SIGN_UP = gql`
    mutation signUp(
        $input: UserCreateInput!
    ){
        signUp(input:$input){
            id
            email
        }
    }
`;
export const SIGN_IN = gql`
mutation signIn(
    $input: SignInInput!
    ){
        signIn(input:$input){
        token
        user {
          id
          email
          firstName
          lastName
          organization{
              name
          }
        }
    }
}
`;