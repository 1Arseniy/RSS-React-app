import { useEffect, useState } from 'react';

import type { Dispatch } from 'react';

function useLocalStorage(
  key: string,
  str: string
): [string, Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? savedValue : str;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
