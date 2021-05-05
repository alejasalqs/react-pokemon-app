import React from "react";

export const PokemonTypes = ({ type }) => {
  return <span className={`type ${type} left`}>{type}</span>;
};
