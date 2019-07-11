const { continents, countries } = require("countries-list");

const data = Object.keys(continents)
  .map(k => ({
    name: continents[k],
    code: k
  }));

module.exports = {
  all: () => data,
  getByCode: (code) => data.find(x => x.code == code)
}
