import type { TypeCountry, BaseFields } from '@/types/types';

interface TypePropsTable {
  countries: TypeCountry;
  columns: string[];
  rows: BaseFields[];
}

function Table({ columns, rows }: TypePropsTable) {
  return (
    <div className="flex items-center justify-center">
      <div className="border border-black w-screen">
        <div
          className={`grid border-b-2`}
          style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
          {columns.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </div>
        {rows &&
          rows.map((el1, index1) => (
            <div
              className={`grid`}
              key={index1}
              style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
            >
              {columns.map((el2, index2) => (
                <div key={index2}>{el1[el2] ?? 'N/A'}</div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Table;
