import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByName } from "../../hooks/useGetPokemonByName";
import { PokemonTypes } from "./PokemonTypes";
import { PokemonStats } from "./PokemonStats";

export const PokemonProfile = () => {
  const { name } = useParams();

  const { id, sprites, types, stats, weight, height } = useGetPokemonByName(
    name
  );

  //console.log(types);
  return (
    <>
      <div className="row">
        <h1 className="capitalize-text">
          {id} - {name}
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <img
            src={sprites?.front_default}
            alt={name}
            className="img-fluid"
            width="200"
            height="200"
          />
        </div>
        <div className="col">
          {stats && (
            <>
              <p>Stats:</p>
              <PokemonStats stats={stats} />
            </>
          )}
          {types && (
            <>
              <p>Types:</p>
              {types.map((t) => (
                <PokemonTypes key={t.type?.name} type={t.type?.name} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
