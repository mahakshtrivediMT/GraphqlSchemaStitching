import { gql } from "apollo-server"
export const queryType = gql`
    type Query {
        # courseByName(name:String!):Course
        # courseById(id:Int!):Course
        studentById: Student
    }
`;
