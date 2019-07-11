

const continentServiceMock = {
  all: () => continents,
  getByCode: (code) => continents.find(x => x.code == code)
}

const countryServiceMock = {
  all: () => countries,
  getByCode: (code) => countries[code],
  getByContinent: (code) => data.filter(x => x.continent == code)
}

const continentsTest = () = {
  const output = continentResolver.Query.continents(undefined, undefined, { continentService: continentServiceMock });
  expect(output).toEqual(continents);
}

const continentTest = () => {
  const output = continentResolver.Query.continent(undefined, { code: "AF" }, { continentService: continentServiceMock } );
  expect(output).toEqual(continents[0]);
}

const countriesTest = () => {
  const output = continentResolver.Continent.countries({ })
}
