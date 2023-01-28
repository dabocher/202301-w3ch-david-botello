import Pokemon from "./Pokemon.js";

describe("Given a Pokemon class with property", () => {
  describe("When the class receives a param of weight =3 ", () => {
    test("Then it should create a Pokemon with property 'weight' with a value of 3", () => {
      const pokemonWeight = {
        id: 0,
        name: "",
        picture: "",
        weight: 3,
      };
      const pokemonExpectedWeight = new Pokemon(0, "", "", 3);

      expect(pokemonWeight.weight).toEqual(pokemonExpectedWeight.weight);
    });
  });
  describe("When the class receives a param of name = 'Pikachu' ", () => {
    test("Then it should create a Pokemon with property 'name' with a value of 'Pikachu'", () => {
      const pokemonName = {
        id: 0,
        name: "Pikachu",
        picture: "",
        weight: 0,
      };
      const pokemonExpectedName = new Pokemon(0, "Pikachu", "", 0);

      expect(pokemonName.name).toEqual(pokemonExpectedName.name);
    });
  });
});
