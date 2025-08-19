import type { TypeUser } from '@/types/types';

function User({ name }: TypeUser) {
  return <div>{name}</div>;
}

export default User;
