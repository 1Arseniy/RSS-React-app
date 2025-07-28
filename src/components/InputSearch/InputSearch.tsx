import type { ChangeEvent } from 'react';

interface typePropsInputSearch {
  setText: (name: string) => void;
  inputValue: string;
}

function InputSearch(props: typePropsInputSearch) {
  const { setText, inputValue } = props;
  const setValue = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setValue(e)}
      placeholder="Search by name..."
      name="search"
      className={`text-black h-9 bg-white rounded-sm pl-2 focus-within:outline-2 focus-within:outline-blue-700`}
    />
  );
}

export default InputSearch;
