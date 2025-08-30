export interface TypeCountry {
  [key: string]: {
    data: {
      year: number;
      population: number;
      co2: number;
      co2_per_capita: number;
      methane: number;
      oil_co2: number;
    }[];
    iso_code: string;
  };
}

export type TypeCountries = TypeCountry[];

export interface BaseFields {
  [key: string]: string | number | undefined;
}

export interface TypeAppState {
  columns: string[];
  year: number;
  rows: BaseFields[];
  sort: boolean;
  name: string;
}

export type TypeAppSetState = React.Dispatch<
  React.SetStateAction<TypeAppState>
>;
