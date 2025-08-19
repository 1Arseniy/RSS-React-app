import { create } from 'zustand';

import type { TypeUser } from '@/types/types';

interface TypeUsers {
  users: TypeUser[];
  addUser: (user: TypeUser) => void;
}

const useUsers = create<TypeUsers>()((set) => ({
  users: [],
  addUser: (user: TypeUser) =>
    set((state) => {
      return { users: [...state.users, user] };
    }),
}));

export default useUsers;
