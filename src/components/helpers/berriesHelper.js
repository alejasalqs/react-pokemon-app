
const URL = 'https://pokeapi.co/api/v2/berry/';

export const getAllBerries = async (url) => {
    const data = await fetch(url);
    return await data.json();
}

export const getBerrie = async (id) => {
    const data = await fetch(`${URL}${id}`);
    return await data.json();
}