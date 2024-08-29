import axios from 'axios';

export const fetchCharacters = async (filter: string) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?status=${filter}`
  );
  return response.data.results;
};
