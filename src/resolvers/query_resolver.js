export const queryResolver = {
    Query: {
        studentById:(_,{id})=> {
            return studentData.find(student=>student.id===id)//|| new NotFoundError();
          },      
    }
}
