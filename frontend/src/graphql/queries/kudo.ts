import { gql } from "@apollo/client";
import { kudoFields } from "../fragments";

export const ASIGNED_KUDOS = gql`
    query getAsignedKudos{
        getAsignedKudos{
            ...kudoFields
        }
    }
    ${kudoFields}
`

export const RECEIVED_KUDOS = gql`
    query getReceivedKudos{
        getReceivedKudos{
            ...kudoFields
        }
    }
    ${kudoFields}
`