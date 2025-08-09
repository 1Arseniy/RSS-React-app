import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
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

export interface TypeQueryResult {
  data: TypeCharacter[] | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching: boolean;
  refetch: () => void;
}

export interface TypeProps {
  page: number;
  name: string;
}

export type TypeGetByRequest = (name?: string, page?: number) => Promise<void>;

export type TypeSetState = Dispatch<React.SetStateAction<TypeProps>>;

export interface CharactersRequestProps {
  states: TypeProps;
  queryResult: TypeQueryResult;
  setState: TypeSetState;
}

export interface TypeModalStates {
  character: Partial<TypeCharacter>;
  loading: boolean;
}

export interface TypePropsCard {
  character?: TypeCharacter;
  page: number;
}
