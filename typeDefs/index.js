const { query } = require("./query");
const { continentType, countryType } = require("./types");

const typeDefs = [query, continentType, countryType];

module.exports = {
  typeDefs
};
