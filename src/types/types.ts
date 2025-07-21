import type { Dispatch } from 'react';

export interface typeCharacter {
  gender: string;
  image: string;
  name: string;
  status: string;
}

export interface typeCharacters {
  results: typeCharacter[];
}

export interface typeProps {
  characterByRequest: typeCharacter[];
  loading: boolean;
  error: boolean;
  page: number;
}

export type typeGetByRequest = (name?: string, page?: number) => Promise<void>;

export type typeSetUpdatePage = Dispatch<React.SetStateAction<typeProps>>;

export interface charactersRequestProps {
  states: typeProps;
  getByRequest: typeGetByRequest;
  setUpdatePage?: typeSetUpdatePage;
}
