import { PokeballIcon, SearchIcon } from "../../icons/Icons";
import TextField from "../TextField";
import "./index.scss";
import { usePokemon } from "../../contexts/PokemonContext/PokemonContext";
import { useEffect } from "react";
import PokemonService from "../../service/PokemonService";
import { Pokemon } from "../../contexts/PokemonContext/types";

export default function Header() {
  const { pokemonSearch, setPokemonSearch, setPokemonsList } = usePokemon();

  const handlePokemon = async () => {
    const pokemon: Pokemon = await PokemonService.getPokemonByNameOrId(pokemonSearch);

    setPokemonsList([pokemon]);
  }

  const handlePokemons = async () => {
    const pokemons: Pokemon[] = await PokemonService.getPokemons(0, 20);

    setPokemonsList(pokemons);
  }

  useEffect(() => {
    if (pokemonSearch){
      handlePokemon();
    }else{
      handlePokemons();
    }
  }, [pokemonSearch])

  return (
    <div id="header">
      <div className="container content">
        <div className="title">
          <div className="icon">
            <PokeballIcon color="var(--color-grayscale-white)" />
          </div>

          <p>Pokédex</p>
        </div>

        <div className="seach_bar">
          <TextField
            placeholder="Search Pokémon complete name or id"
            onChange={(e) => {
              setPokemonSearch(e.target.value);
            }} 
            value={pokemonSearch}
            icon={<SearchIcon color="var(--color-primary)" />}
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  );
}
