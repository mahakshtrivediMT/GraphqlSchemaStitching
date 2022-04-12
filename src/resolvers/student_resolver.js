import {mergeResolvers} from '@graphql-tools/merge'
import {queryResolver} from "./query_resolver"

const studentResolver = {
    Student: {
        id: (parent)=>parent.id,
        name: (parent)=>parent.name
    }
}

const resolversArray = [queryResolver,studentResolver]
export const resolvers = mergeResolvers(resolversArray)


