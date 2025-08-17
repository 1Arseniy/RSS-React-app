import type { TypeCharacters } from '@/types/types';

export default async function getInitialData() {
  const data = await fetch('https://rickandmortyapi.com/api/character/');
  const response: TypeCharacters = await data.json();
  return response.results;
}
