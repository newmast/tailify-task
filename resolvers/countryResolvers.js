const countryResolvers = {
  Query: {
    countries: (parent, args, { countryService }) => countryService.all(),
    country: (parent, { code }, { countryService }) => countryService.getByCode(code)
  },
  Country: {
    continent: (parent, args, { continentService }) => continentService.getByCode(parent.continent)
  }
};

module.exports = {
  countryResolvers
}
