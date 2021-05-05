
const URL = 'https://pokeapi.co/api/v2/ability/';

export const getAllAbilities = async (url) => {
    const data = await fetch(url);
    return await data.json();
}

export const getAbilitie = async (id) => {
    const data = await fetch(`${URL}${id}`);
    return await data.json();
}