import { Pokemon } from "../contexts/PokemonContext/types";

const API_URL = 'https://pokeapi.co/api/v2/';

const PokemonService = {
  async getPokemons(offset: number, limit: number): Promise<Pokemon[]> {
    let pokemonList: Pokemon[] = [];

    const pokemonsRequest = await fetch(`${API_URL}pokemon?offset=${offset}&limit=${limit}`);
    const pokemonsResponse = await pokemonsRequest.json();

    for (const pokemon of pokemonsResponse.results) {
      const pokemonRequest = await fetch(pokemon.url);
      const pokemonResponse = await pokemonRequest.json();

      pokemonList.push({
        id: pokemonResponse?.id,
        name: pokemonResponse?.name,
        image: pokemonResponse?.sprites.other[ 'official-artwork' ].front_default,
        types: pokemonResponse?.types,
        weight: pokemonResponse?.weight,
        height: pokemonResponse?.height,
        stats: pokemonResponse?.stats
      } as Pokemon);
    }
    
    return pokemonList;
  },
  async getPokemonByNameOrId(nameOrId: string): Promise<Pokemon> {
    const pokemonRequest = await fetch(`${API_URL}pokemon/${nameOrId}`);
    const pokemonResponse = await pokemonRequest.json();
    
    return {
      id: pokemonResponse?.id,
      name: pokemonResponse?.name,
      image: pokemonResponse?.sprites.other[ 'official-artwork' ].front_default,
      types: pokemonResponse?.types,
      weight: pokemonResponse?.weight,
      height: pokemonResponse?.height,
      stats: pokemonResponse?.stats
    } as Pokemon;
  }
}

export default PokemonService;