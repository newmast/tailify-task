const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { Logger } = require('./logger');
const services = require('./services');

const enableLogging = true

extensions = []
if (enableLogging)
  extensions.push(() => new Logger())

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  extensions: [...extensions],
  context: ({ req, res }) => {
    return {
      ...services
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
