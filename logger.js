const { print } = require('graphql');
const { gql } = require('apollo-server');

class Logger {
  requestDidStart({request, queryString, parsedQuery, variables, requestContext }) {
    console.log(`Timestamp: ${new Date()}`);
    console.log("Query:");
    console.log(queryString);
  }

  willSendResponse({ graphqlResponse }) {
    const resultCount = graphqlResponse.extensions.tracing.execution.resolvers.length;
    console.log(`Result size: ${resultCount}`);
  }
}

module.exports = {
  Logger
};
