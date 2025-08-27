import { Header, Table } from '@/components';
import { use, useEffect, useState } from 'react';
import type { TypeCountry, TypeAppState } from './types/types';

interface TypePropsApp {
  promise: Promise<TypeCountry>;
}

function App({ promise }: TypePropsApp) {
  const data = use(promise);
  const countries = Object.entries(data);

  const [state, setState] = useState<TypeAppState>({
    countries: {},
    columns: ['Country', 'ISO', 'Population', 'CO2', 'CO2 per capita'],
    year: 2023,
    rows: [],
    sort: true,
    name: '',
  });

  const newRows = countries.map(([countries, arr]) => {
    const data = arr.data.find((obj) => obj.year === state.year);
    return {
      Country: countries,
      ISO: arr.iso_code,
      Population: data?.population,
      CO2: data?.co2,
      'CO2 per capita': data?.co2_per_capita,
    };
  });
  const filtersData = newRows
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

  useEffect(() => {
    setState((prev) => ({ ...prev, rows: filtersData }));
  }, [data, setState, state.year, state.name, state.sort]);

  return (
    <div className="h-screen">
      <Header state={state} setState={setState} />
      <Table
        countries={state.countries}
        rows={state.rows}
        columns={state.columns}
        year={state.year}
      />
    </div>
  );
}

export default App;
