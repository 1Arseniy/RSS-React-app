import type { TypeUser } from '@/types/types';

function User({
  name,
  age,
  password,
  colorCard,
  gender,
  accept,
  country,
  img,
}: TypeUser) {
  console.log(img);
  return (
    <div
      className="flex flex-col h-[200px] w-80 m-2.5 rounded-xl"
      style={{ backgroundColor: colorCard }}
    >
      {/* <img src="" /> */}
      <span>Name: {name}</span>
      <span>Age: {age}</span>
      <span>password: {password}</span>
      <span>gender: {gender}</span>
      <span>Accept Terms and Conditions agreement: {accept}</span>
      <span>Country: {country}</span>
    </div>
  );
}

export default User;
