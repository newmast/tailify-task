const { gql } = require("apollo-server");

const query = gql`
  type Query {
    continents: [Continent]!
    continent(code: String!): Continent
    countries: [Country]!
    country(code: String!): Country
  }
`;

module.exports = {
  query
};
