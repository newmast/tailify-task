const { gql } = require("apollo-server");

const continentType = gql`
  type Continent {
    name: String!
    code: String!
    countries: [Country]!
  }
`;

module.exports = {
  continentType
};
