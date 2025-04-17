import "./index.scss";
import { useEffect, useState } from "react";
import { usePokemon } from "../../contexts/PokemonContext/PokemonContext";
import PokemonService from "../../service/PokemonService";
import { Pokemon } from "../../contexts/PokemonContext/types";
import PokeCard from "../../components/PokeCard";
import { Button } from "../../components/Button";
import Modal from "../../components/Modal";
import PokeDetail from "../../components/PokeDetail";

export default function Home() {
  const { pokemonsList, setPokemonsList, pokemonSelected, setPokemonSelected } = usePokemon();
  const { page, setPage } = usePokemon();
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  
  const handlePokemon = async () => {
    setIsLoading(true);
    const data: Pokemon[] = await PokemonService.getPokemons(0, (page * 20));
    setPokemonsList(data);
    setIsLoading(false);
  }

  useEffect(() => {
    handlePokemon();
  }, [page])

  return (
    <div className="container">
      <div className="pokemons-list">
        {pokemonsList?.map((pokemon) => (
          <div 
            key={pokemon.id}
            onClick={() => {
              setIsOpen(true);
              setPokemonSelected(pokemon);
            }}
          >
            <PokeCard {...pokemon} />
          </div>
        ))}
      </div>

      <div className="pokemons-view-more">
        <Button 
          style={{
            width: "100%",
            maxWidth: "150px"
          }}
          isLoading={isLoading}
          onClick={() => setPage(page + 1)}
        >
          Show more
        </Button>
      </div>

      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        title={pokemonSelected?.name}
        backgroundColor={`var(--color-pokemon-type-${pokemonSelected?.types[0].type.name})`}
        titleColor="var(--color-grayscale-white)"
        children={
          <PokeDetail pokemonSelected={pokemonSelected} />
        }
      />
    </div>
  );
}
