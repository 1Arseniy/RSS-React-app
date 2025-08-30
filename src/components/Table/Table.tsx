import type { BaseFields } from '@/types/types';
import { memo, useEffect, useState } from 'react';

interface TypePropsTable {
  columns: string[];
  rows: BaseFields[];
  year: number;
}

const Table = ({ columns, rows, year }: TypePropsTable) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 500);
  }, [year]);

  return (
    <div className="flex items-center justify-center">
      <div className="border border-black w-screen">
        <div
          className={`grid border-b-2`}
          style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
          {columns.map((column, index) => (
            <div key={column}>
              {column}
              {index === 0 && `(${year})`}
            </div>
          ))}
        </div>
        {rows &&
          rows.map((el1, index1) => (
            <div
              className={`grid text-[12px]`}
              key={index1}
              style={{
                gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
              }}
            >
              {columns.map((el2, index2) => (
                <div
                  className={`${isActive && index2 >= 2 && 'text-amber-600 transition-[text-amber-600]'}`}
                  key={index2}
                >
                  {el1[el2] ?? 'N/A'}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Table);
