const { countries } = require("countries-list");

const data = Object.values(countries)

module.exports = {
  all: () => data,
  getByCode: (code) => countries[code],
  getByContinent: (code) => data.filter(x => x.continent == code)
}
