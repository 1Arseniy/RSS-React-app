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
  return (
    <div
      className="flex flex-col  w-80 m-2.5 rounded-xl"
      style={{ backgroundColor: colorCard }}
    >
      {<img src={img} className="object-cover h-52 rounded-t-md" />}
      <div className="p-3.5 flex flex-col">
        <span>Name: {name}</span>
        <span>Age: {age}</span>
        <span>password: {password}</span>
        <span>gender: {gender}</span>
        <span>Accept Terms and Conditions agreement: {accept}</span>
        <span>Country: {country}</span>
      </div>
    </div>
  );
}

export default User;
