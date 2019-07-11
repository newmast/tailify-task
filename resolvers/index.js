const { continentResolvers } = require('./continentResolvers');
const { countryResolvers } = require('./countryResolvers');

const resolvers = [continentResolvers, countryResolvers];

module.exports = {
  resolvers
};
