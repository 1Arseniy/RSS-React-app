import { Table } from '@/components';
import { use, useEffect, useState } from 'react';
import type { TypeCountry, TypeAppState } from './types/types';

interface TypePropsApp {
  promise: Promise<TypeCountry>;
}

function App({ promise }: TypePropsApp) {
  const data = use(promise);
  const [state, setState] = useState<TypeAppState>({
    countries: {},
    columns: ['Country', 'ISO', 'Population', 'CO2', 'CO2 per capita'],
    year: 2023,
    rows: [],
  });

  useEffect(() => {
    const newRows = Object.entries(data).map((el) => {
      const data = el[1].data.find((obj) => obj.year === state.year);
      return {
        Country: el[0],
        ISO: el[1].iso_code,
        Population: data?.population,
        CO2: data?.co2,
        'CO2 per capita': data?.co2_per_capita,
      };
    });
    setState((prev) => ({ ...prev, rows: newRows }));
  }, [data, setState, state.year]);

  return (
    <div className="h-screen">
      <Table
        countries={state.countries}
        rows={state.rows}
        columns={state.columns}
      />
    </div>
  );
}

export default App;
