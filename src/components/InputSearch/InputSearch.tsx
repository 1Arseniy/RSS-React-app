import type { ChangeEvent } from 'react';

interface typePropsInputSearch {
  changeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  type: string;
  placeholder?: string;
  styles?: string;
}

function InputSearch({
  inputValue,
  type,
  placeholder,
  styles,
  changeSearch,
}: typePropsInputSearch) {
  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => changeSearch(e)}
      placeholder={placeholder}
      name={type}
      className={`border-2 border-t-gray-600 h-9 bg-white rounded-sm pl-2 focus-within:outline-2 ${styles}`}
    />
  );
}

export default InputSearch;
