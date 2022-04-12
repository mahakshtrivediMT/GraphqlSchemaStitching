import { mergeResolvers } from '@graphql-tools/merge';

const queryResolver = {
    Query: {
        studentById:(_,{id})=> {
            return studentData.find(student=>student.id===id)//|| new NotFoundError();
          },      
    }
};

const studentResolver = {
    Student: {
        id: (parent)=>parent.id,
        name: (parent)=>parent.name
    }
};

const resolversArray = [queryResolver,studentResolver];
const resolvers = mergeResolvers(resolversArray);

export { resolvers };
