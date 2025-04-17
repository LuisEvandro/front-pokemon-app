import { StraightenIcon, WeightIcon } from "../../icons/Icons";
import PokeTypeTag from "../PokeTypeTag";
import "./index.scss";
import { PokeDetailProps } from "./types";

export default function PokeDetail({ pokemonSelected }: PokeDetailProps){
  
  if(!pokemonSelected) return null;

  const formatId = (id: number) => {
    return String(id).padStart(3, '0');
  }

  return (
    <div 
      key={formatId(pokemonSelected.id)}
      className="poke-detail-content"
    >
      <div
        className="poke-detail-image"
      >
        <img src={pokemonSelected.image} alt={pokemonSelected.name} />
      </div>

      <div
        className="poke-detail-info"
      >
        <div
          className="types"
        >
          {pokemonSelected.types.map((type) => (
            <div 
              key={type.slot}
              className="tag"
            >
              <PokeTypeTag type={type.type.name} />
            </div>
          ))}
        </div>

        <div 
          className="about"
        >
          <p 
            className="about-title"
            style={{
              color: `var(--color-pokemon-type-${pokemonSelected.types[0].type.name})`
            }}
          >
            About
          </p>

          <div className="about-info">
            <div className="about-info-item weight">
              <div className="info-item-description">
                <WeightIcon />
                {pokemonSelected.weight} Kg
              </div>

              <p className="info-item-title">Weight</p>
            </div>
            
            
            <div className="about-info-item height">
              <div className="info-item-description">
                <StraightenIcon />
                <p>{pokemonSelected.height} m</p>
              </div>
              
              <p className="info-item-title">Height</p>
            </div>

            <div className="about-info-item moves">
              <div className="info-item-description">
                <p>{pokemonSelected.moves[0].move.name}</p>
                <p>{pokemonSelected.moves[1].move.name}</p>
              </div>
              
              <p className="info-item-title">Moves</p>
            </div>
          </div>
        </div>

        <div
          className="stats"
        >
          {pokemonSelected.stats.map((stat) => (
            <div 
              key={stat.stat.name}
              className="stat"
            >
              <p>{stat.stat.name}: {stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}