import type { ChangeEvent } from 'react';

interface typePropsInputSearch {
  setText: (name: string) => void;
  InputValue: string;
}

function InputSearch(props: typePropsInputSearch) {
  const { setText, InputValue } = props;

  const setValue = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input
      data-testid="input"
      type="text"
      value={InputValue}
      onChange={(e) => setValue(e)}
      placeholder="Search by name..."
      name="search"
      className="h-9 bg-white rounded-sm pl-2 focus-within:outline-2 focus-within:outline-blue-700"
    />
  );
}

export default InputSearch;
