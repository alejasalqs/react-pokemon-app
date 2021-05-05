import React from "react";
import { Link } from "react-router-dom";
import { PokemonTypes } from "./PokemonTypes";

export const PokemonCard = ({ name, sprites, id, types }) => {
  //console.log(types);
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src={sprites.front_default} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title capitalize-text">
          {id} - {name}
        </h5>
        <div>
          {types.map((t) => (
            <PokemonTypes type={t.type.name} />
          ))}
        </div>
        <br></br>
        <Link to={`pokemon/${name}`}>See more...</Link>
      </div>
    </div>
  );
};
