import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Dispatch } from 'react';
import type { TypeTrigger } from '@/client/api';

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
  isLoading: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching: boolean;
}

export interface TypeProps {
  // characters: TypeCharacter[];
  // characterByRequest: ;
  // loading: boolean;
  // error: boolean;
  page: number;
  name: string;
  // characters: TypeCharacters | undefined;
}

export type TypeGetByRequest = (name?: string, page?: number) => Promise<void>;

export type TypeSetUpdatePage = Dispatch<React.SetStateAction<TypeProps>>;

export interface CharactersRequestProps {
  states: TypeProps;
  trigger?: TypeTrigger;
  queryResult: TypeQueryResult;
  // characters: TypeCharacters | undefined;
  // getByRequest: TypeGetByRequest;
  setState: TypeSetUpdatePage;
}

export interface TypeModalStates {
  character: Partial<TypeCharacter>;
  loading: boolean;
}

export interface TypePropsCard {
  character?: TypeCharacter;
  page: number;
}
