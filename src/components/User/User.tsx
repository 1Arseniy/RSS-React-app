import type { TypeUser } from '@/types/types';

function User({ name, age, password, colorCard }: TypeUser) {
  return (
    <div
      className="flex flex-col h-[200px] w-80 m-2.5"
      style={{ backgroundColor: colorCard }}
    >
      {/* <img src="" /> */}
      <span>Name: {name}</span>
      <span>Age: {age}</span>
      <span>password: {password}</span>
      <span>gender: {password}</span>
      <span>Country: {password}</span>
    </div>
  );
}

export default User;
