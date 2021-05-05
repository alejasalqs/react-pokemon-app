import { useEffect, useState } from "react";
import { getPokemonByName } from "../components/helpers/pokemonHelper";

export const useGetPokemonByName = (name) => {
  const [state, setState] = useState({});

  useEffect(() => {
    getPokemonByName(name).then((pokemon) => setState(pokemon));
  }, [name]);

  return state;
};
