import type { Dispatch } from 'react';

export interface TypeCharacter {
  id: number;
  gender: string;
  image: string;
  name: string;
  status: string;
}

export interface TypeCharacters {
  results: TypeCharacter[];
}

export interface TypeProps {
  characterByRequest: TypeCharacter[];
  loading: boolean;
  error: boolean;
  page: number;
}

export type TypeGetByRequest = (name?: string, page?: number) => Promise<void>;

export type TypeSetUpdatePage = Dispatch<React.SetStateAction<TypeProps>>;

export interface CharactersRequestProps {
  states: TypeProps;
  getByRequest: TypeGetByRequest;
  setState: TypeSetUpdatePage;
}

export interface TypeModalStates {
  character: Partial<TypeCharacter>;
  loading: boolean;
}

export interface TypePropsCard {
  character?: TypeCharacter;
  states: TypeProps;
}
