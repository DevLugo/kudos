import { gql } from "@apollo/client";
import { userFields } from "../fragments";

export const CREATE_BORROWER = gql`
    mutation createKudo(
        $input: KudoCreateInput!
    ){
        createKudo(input: $input){
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
    }
${userFields}
`