import type { ChangeEvent } from 'react';

import { useTranslations } from 'next-intl';

interface TypePropsInputSearch {
  setText: (name: string) => void;
  inputValue: string;
}

function InputSearch(props: TypePropsInputSearch) {
  const { setText, inputValue } = props;
  const setValue = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const t = useTranslations('HomeView');

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setValue(e)}
      placeholder={t('Header.inputPlaceholder')}
      name="search"
      className={`text-black h-9 bg-white rounded-sm pl-2 focus-within:outline-2 focus-within:outline-blue-700`}
    />
  );
}

export default InputSearch;
