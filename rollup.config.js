  export default [
  
    // ES6 bundle
    {
        input: './src/resolvers/student_resolver.js',
        output: {
            file:'./src/resolvers/bundle.js',
        }
      },
    {
  
      input: './src/schema/student_schema.js',
      output: {
        file: './src/schema/bundle.js',
      }
    }
  ];