import { usePokemon } from "../../contexts/PokemonContext/PokemonContext";
import { Pokemon } from "../../contexts/PokemonContext/types";
import "./index.scss";

export default function PokeCard(pokemon: Pokemon){
  const { setPokemonSelected } = usePokemon();

  const formatId = (id: number) => {
    return String(id).padStart(3, '0');
  }

  return (
    <div 
      key={pokemon.id}
      className="poke-card-content"
      onClick={() => setPokemonSelected(pokemon)}
    >
      <div className="poke-card-header">
        <span>{`#${formatId(pokemon.id)}`}</span>
      </div>
      <div className="poke-card-body">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="poke-card-footer">
        <p>{pokemon.name.toUpperCase()}</p>
      </div>
    </div>
  );
}