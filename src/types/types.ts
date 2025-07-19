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
}

export type typeGetByRequest = (name?: string) => Promise<void>;

export interface charactersRequestProps {
  states: typeProps;
  getByRequest: typeGetByRequest;
}
