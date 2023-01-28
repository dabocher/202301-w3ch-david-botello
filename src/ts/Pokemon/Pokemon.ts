import type PokemonStructure from "./types";

class Pokemon implements PokemonStructure {
  constructor(
    public id: number,
    public name: string,
    public picture: string,
    public weight: number
  ) {}
}

export default Pokemon;
