export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  image: string;
  weight: number;
  height: number;
  stats: PokemonStat[];
}

export type PokemonContextType = {
  pokemonsList: Pokemon[];
  setPokemonsList: (pokemons: Pokemon[]) => void;
  pokemonSearch: string;
  setPokemonSearch: (search: string) => void;
  page: number;
  setPage: (page: number) => void;
}

export type PokemonProviderProps = {
  children: React.ReactNode;
}
