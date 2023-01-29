interface PokemonCardStructure {
  render: () => void;

  id: number;
  name: string;
  picture: string;
  weight: number;
}

export default PokemonCardStructure;
