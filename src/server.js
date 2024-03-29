const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const resolvers = require('./graphql/resolvers');
const typeDefs = gql(fs.readFileSync(`${__dirname}/graphql/typeDefs.graphql`, { encoding: 'utf-8' }));
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`server started at ${url}`));


