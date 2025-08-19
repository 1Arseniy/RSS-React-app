import { useRef } from 'react';

import useUsers from '@/store/store';

// import useUsers from '@/store/store';

interface TypePropsUncontrolledForm {
  onClose: () => void;
}

function UncontrolledForm({ onClose }: TypePropsUncontrolledForm) {
  const addUser = useUsers((state) => state.addUser);
  const inputName = useRef<HTMLInputElement>(null);
  const inputGenderMale = useRef<HTMLInputElement>(null);
  const inputGenderFemale = useRef<HTMLInputElement>(null);
  //   const

  const submitForm = () => {
    addUser({ name: inputName.current?.value || '' });
    onClose();
  };

  return (
    <form className="flex flex-col justify-around items-center gap-y-2.5">
      <input ref={inputName} type="text" placeholder="Name" />
      <input type="number" placeholder="Age" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm password" />
      <div className="text-white">
        Gender
        <div>
          <input
            ref={inputGenderMale}
            id="Male"
            type="radio"
            name="gender"
            value="Male"
          />
          <label htmlFor="Male">Male</label>
        </div>
        <div>
          <input
            ref={inputGenderFemale}
            type="radio"
            id="Female"
            name="gender"
            value="Female"
          />
          <label htmlFor="Female">Female</label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">Accept Terms and Conditions agreement </label>
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="file"
        className="hidden"
      />
      <label htmlFor="file">Choose file</label>
      <input type="text" placeholder="Country" />
      <input
        onClick={submitForm}
        type="submit"
        value="Submit"
        className="pr-2 cursor-pointer"
      />
    </form>
  );
}

export default UncontrolledForm;
