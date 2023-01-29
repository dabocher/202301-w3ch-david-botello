import PokemonCard from "./components/PokemonCard/PokemonCard.js";
import getPokemonsInfo from "./getPokemonInfo/getPokemonInfo.js";

const fillPage = [1];
for (let i = 2; i < 20; i++) {
  fillPage.push(i);
}

(async () => {
  for await (const item of fillPage) {
    const pokemonList = await getPokemonsInfo(item);

    const newPokemon = new PokemonCard(
      pokemonList.name,
      pokemonList.weight,
      pokemonList.id
    );
    newPokemon.render();
  }
})();
