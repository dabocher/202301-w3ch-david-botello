import Component from "./components/Component/Component.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";
/* Import PokemonCard from "./components/PokemonCard/PokemonCard"; */

for (let i = 1; i < 20; i++) {
  const pokemon = new PokemonCard("", 35, i);
  pokemon.render();
}
