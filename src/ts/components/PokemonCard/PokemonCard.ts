import Component from "../Component/Component.js";
import type PokemonCardStructure from "./types.js";

class PokemonCard implements PokemonCardStructure {
  picture: string;

  constructor(public name: string, public weight: number, public id: number) {
    this.picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }

  render() {
    const rootElement: HTMLElement = document.querySelector(".root");
    const cardElement = new Component(rootElement, "card", "article");
    cardElement.render();
    cardElement.domElement.innerHTML = `
    <img class="card__image" alt="a pokemon type" src="${this.picture}" width="200" height="200">
    <div class="card__info">
    <h2 class="card__name">Name: ${this.name}</h2>
    <span class="card__weight">Weight: ${this.weight}</span>
    </div>
    `;
  }
}
export default PokemonCard;
