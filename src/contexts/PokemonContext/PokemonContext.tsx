import React, { createContext, useContext, useState } from 'react';
import { Pokemon, PokemonContextType, PokemonProviderProps } from './types';

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  return (
    <PokemonContext.Provider 
      value={{ 
        pokemonsList, 
        setPokemonsList, 
        pokemonSearch, 
        setPokemonSearch,
        page,
        setPage
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextType => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemon deve ser usado dentro de um PokemonProvider');
  }
  
  return context;
};
