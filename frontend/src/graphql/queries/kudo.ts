import { gql } from "@apollo/client";
import { AsignedKudoFields, kudoFields } from "../fragments";

export const ASIGNED_KUDOS = gql`
    query getAsignedKudos{
        getAsignedKudos{
            ...AsignedKudoFields
        }
    }
    ${AsignedKudoFields}
`

export const RECEIVED_KUDOS = gql`
    query getReceivedKudos{
        getReceivedKudos{
            ...kudoFields
        }
    }
    ${kudoFields}
`