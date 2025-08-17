'use client';
import { useEffect, useState } from 'react';

import type { Dispatch } from 'react';

function useLocalStorage(
  key: string,
  str: string
): [string, Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState(() => {
    const savedValue =
      typeof window !== 'undefined' && window.localStorage.getItem(key);
    return savedValue ? savedValue : str;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
