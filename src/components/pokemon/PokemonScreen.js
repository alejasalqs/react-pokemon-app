import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../helpers/pokemonHelper";
import { Loading } from "../ui/Loading";
import { PokemonCard } from "./PokemonCard";

export const PokemonScreen = () => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?";

  const [url, setUrl] = useState(BASE_URL + "offset=0&limit=151");

  const [pokemonList, setPokemonList] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllPokemon(url).then((resp) => {
      setPokemonList(resp);
      setLoading(false);
    });
  }, [url]);

  return (
    <>
      <h1>Pokemon List</h1>
      <hr />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row mt-5">
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=0&limit=151")}
              >
                Gen 1
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=151&limit=99")}
              >
                Gen 2
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=251&limit=135")}
              >
                Gen 3
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=386&limit=107")}
              >
                Gen 4
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=494&limit=154")}
              >
                Gen 5
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=649&limit=72")}
              >
                Gen 6
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=721&limit=80")}
              >
                Gen 7
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => setUrl(BASE_URL + "offset=809&limit=80")}
              >
                Gen 8
              </button>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.name} {...pokemon} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
