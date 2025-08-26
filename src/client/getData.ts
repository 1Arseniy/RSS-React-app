import type { TypeCountry } from '@/types/types';

export async function getData(): Promise<TypeCountry> {
  const response = await fetch(
    'https://1arseniy.github.io/dataCountries/co2-data.json'
  );
  const data: TypeCountry = await response.json();
  console.log(data);
  return data;
}
