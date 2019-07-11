const continentResolvers = {
  Query: {
    continents: (parent, args, { continentService }) => continentService.all(),
    continent: (parent, { code }, { continentService }) => continentService.getByCode(code)
  },
  Continent: {
    countries: (parent, args, { countryService }) => countryService.getByContinent(parent.code)
  }
};

module.exports = {
  continentResolvers
}
