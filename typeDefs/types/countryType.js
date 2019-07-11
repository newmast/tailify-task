const { gql } = require("apollo-server");

const countryType = gql`
  type Country {
    name: String!,
    native: String!,
    phone: String!,
    continent: Continent!,
    capital: String!,
    currency: String!,
    languages: [String]!,
    emoji: String!,
    emojiU: String!
  }
`;

module.exports = {
  countryType
};
