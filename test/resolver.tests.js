const assert = require('assert');
const { continentResolvers } = require("../resolvers/continentResolvers");

const continents = [
  {
    name: "Africa",
    code: "AF"
  },
  {
    name: "North America",
    code: "NA"
  }
];

const countries = [
  {
    name: "United States"
  },
  {
    name: "Canada"
  }
]

const continentServiceMock = {
  all: () => continents,
  getByCode: (code) => continents.find(x => x.code == code)
}

describe('ContinentService', function() {
  describe('#continents', function() {
    it('should return all continents', function() {
      const output = continentResolvers.Query.continents(undefined, undefined, { continentService: continentServiceMock });
      assert.equal(output, continents);
    });
  });

  describe('#continent', function() {
    it('should return continent with appropriate code', function() {
      const output = continentResolvers.Query.continent(undefined, { code: "AF" }, { continentService: continentServiceMock } );
      assert.equal(output, continents[0]);
    });
  });
});
