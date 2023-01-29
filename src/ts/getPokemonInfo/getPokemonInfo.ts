import type PokemonStructure from "../Pokemon/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let list: PokemonStructure[];

const getPokemonsInfo = async (id: number) => {
  const response = await fetch(`${apiUrl}${id}`);
  const pokemonData = (await response.json()) as PokemonStructure;

  return pokemonData;
};

export default getPokemonsInfo;
