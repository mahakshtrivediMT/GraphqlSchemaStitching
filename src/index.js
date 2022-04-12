import { ApolloServer } from "apollo-server"
import { mergeTypeDefs } from '@graphql-tools/merge'
import {mergeResolvers} from '@graphql-tools/merge'
import {courseType} from "../src/schema/course_schema.js"
import {studentType} from "./schema/student_schema"
import {queryType} from"./schema/query"
import {courseResolver} from "./resolvers/course_resolver"
import {studentResolver} from "./resolvers/student_resolver"
// import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"


const typeDefsArray = [queryType,courseType, studentType]
export const typeDefs = mergeTypeDefs(typeDefsArray)

const resolversArray = [courseResolver,studentResolver]
export const resolvers = mergeResolvers(resolversArray)

// const server = new ApolloServer({ typeDefs, resolvers,  
//     plugins: [
//     ApolloServerPluginLandingPageGraphQLPlayground(),
//   ],
// });

// server.listen({
//   port:5054
// }).then(({ url }) => console.log(`server started at ${url}`));
