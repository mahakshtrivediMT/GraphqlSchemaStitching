import { gql } from "apollo-server"
import { queryType } from "./query";
import { mergeTypeDefs } from "@graphql-tools/merge";
const studentType = gql `
    type Student {
        id: ID!
        name: String!
    }
`;

const typeDefsArray = [queryType, studentType]
export const typeDefs = mergeTypeDefs(typeDefsArray)

