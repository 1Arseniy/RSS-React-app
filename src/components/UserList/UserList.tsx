import { User } from '@/components';

import useUsers from '@/store/store';

function UsersList() {
  const users = useUsers((state) => state.users);

  return (
    <div className="flex justify-center flex-wrap">
      {users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </div>
  );
}

export default UsersList;
