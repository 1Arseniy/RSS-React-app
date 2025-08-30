import { Header, Table } from '@/components';
import { use, useEffect, useMemo, useState } from 'react';
import type { TypeCountry, TypeAppState } from './types/types';

interface TypePropsApp {
  promise: Promise<TypeCountry>;
}

function App({ promise }: TypePropsApp) {
  const data = use(promise);
  const countries = Object.entries(data);

  const [state, setState] = useState<TypeAppState>({
    columns: ['Country', 'ISO', 'Population', 'CO2', 'CO2 per capita'],
    year: 2023,
    rows: [],
    sort: true,
    name: '',
  });

  const newRows = countries.map(([country, arr]) => {
    const data = arr.data.find((obj) => obj.year === state.year);
    return {
      Country: country,
      ISO: arr.iso_code,
      Population: data?.population,
      CO2: data?.co2,
      'CO2 per capita': data?.co2_per_capita,
      methane: data?.methane,
      oil_co2: data?.oil_co2,
    };
  });

  const filtersData = useMemo(() => {
    return newRows
      .filter((row) =>
        row.Country.toLocaleLowerCase().includes(
          state.name.trim().toLocaleLowerCase()
        )
      )
      .sort((a, b) => {
        return state.sort
          ? a.Country.localeCompare(b.Country)
          : b.Country.localeCompare(a.Country);
      });
  }, [state.name, state.sort, newRows]);

  useEffect(() => {
    setState((prev) => ({ ...prev, rows: filtersData }));
  }, [data, setState, state.year, state.name, state.sort]);
  return (
    <div className="h-screen">
      <Header state={state} setState={setState} />
      <Table rows={state.rows} columns={state.columns} year={state.year} />
    </div>
  );
}

export default App;
