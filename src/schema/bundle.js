import { gql } from 'apollo-server';
import { mergeTypeDefs } from '@graphql-tools/merge';

const queryType = gql`
    type Query {
        # courseByName(name:String!):Course
        # courseById(id:Int!):Course
        studentById: Student
    }
`;

const studentType = gql `
    type Student {
        id: ID!
        name: String!
    }
`;

const typeDefsArray = [queryType,courseType, studentType];
const typeDefs = mergeTypeDefs(typeDefsArray);

export { typeDefs };