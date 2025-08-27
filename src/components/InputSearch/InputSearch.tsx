import type { ChangeEvent } from 'react';

import type { TypeAppSetState } from '@/types/types';

interface typePropsInputSearch {
  setState: TypeAppSetState;
  inputValue: string;
  type: string;
  placeholder?: string;
  styles?: string;
}

function InputSearch({
  setState,
  inputValue,
  type,
  placeholder,
  styles,
}: typePropsInputSearch) {
  const setValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      setState((prev) => ({ ...prev, year: Number(event.target.value) }));
    } else if (type === 'text') {
      setState((prev) => ({ ...prev, name: event.target.value }));
    }
  };

  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => setValue(e)}
      placeholder={placeholder}
      name={type}
      className={`border-2 border-t-gray-600 h-9 bg-white rounded-sm pl-2 focus-within:outline-2 ${styles}`}
    />
  );
}

export default InputSearch;
