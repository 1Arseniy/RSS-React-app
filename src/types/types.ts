import type { Dispatch } from 'react';

export interface TypeCharacter {
  id: number;
  gender: string;
  image: string;
  name: string;
  status: string;
}

export interface typeCharacters {
  results: TypeCharacter[];
}

export interface typeProps {
  characterByRequest: TypeCharacter[];
  loading: boolean;
  error: boolean;
  page: number;
  isOpen: boolean;
}

export type typeGetByRequest = (name?: string, page?: number) => Promise<void>;

export type typeSetUpdatePage = Dispatch<React.SetStateAction<typeProps>>;

export interface charactersRequestProps {
  states: typeProps;
  getByRequest: typeGetByRequest;
  setState?: typeSetUpdatePage;
}

export interface typeModalStates {
  character: Partial<TypeCharacter>;
  loading: boolean;
  isOpen: boolean;
}

export interface TypeCardProps {
  character?: TypeCharacter;
  states: typeProps;
}
