import { useEffect, useState } from "react";
import { usePokemon } from "../../contexts/PokemonContext/PokemonContext";
import PokemonService from "../../service/PokemonService";
import { Pokemon } from "../../contexts/PokemonContext/types";
import "./index.scss";
import Modal from "../../components/Modal";
import PokeCard from "../../components/PokeCard";
import { Button } from "../../components/Button";

export default function Home() {
  const { pokemonsList, setPokemonsList } = usePokemon();
  const { page, setPage } = usePokemon();
  const [isLoading, setIsLoading] = useState(false);
  
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
          <PokeCard key={pokemon.id} {...pokemon} />
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

      {/* <Modal isOpen={true} onClose={() => {}} title="NOME DO POKEMON" children={<h1>TESTE</h1>} /> */}
    </div>
  );
}
