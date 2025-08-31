import { create } from 'zustand';

import type { TypeUser } from '@/types/types';

interface TypeUsers {
  users: TypeUser[];
  addUser: (user: TypeUser) => void;
}

interface TypeCountries {
  countries: string[];
}

export const useUsers = create<TypeUsers>()((set) => ({
  users: [],
  addUser: (user: TypeUser) =>
    set((state) => {
      return { users: [...state.users, user] };
    }),
}));

export const useCountries = create<TypeCountries>()(() => ({
  countries: [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Chad',
    'Chile',
    'China',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Uganda',
    'Ukraine',
  ],
}));

export default useUsers;
