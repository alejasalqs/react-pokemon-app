const URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = async (url) => {
  const response = await fetch(url);
  let { count, next, previous, results } = await response.json();
  results = await getPokemonBasicInfo(results);
  return results;
};

export const getPokemonBasicInfo = async (pokemonData) => {
  let singlePokemon = await Promise.all(
    pokemonData.map(async (data) => {
      let pokemonInfo = await getSinglePokemon(data.url);
      return pokemonInfo;
    })
  );

  return singlePokemon;
};

const getSinglePokemon = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((resp) => resp.json().then((data) => resolve(data)));
  });
};

export const getPokemonByName = async (name) => {
  const data = await fetch(`${URL}/${name}`);
  return await data.json();
};
