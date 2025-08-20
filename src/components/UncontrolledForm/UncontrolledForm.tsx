import { useState, type FormEvent } from 'react';

import type z from 'zod';

import randomHEX from '@/utils/randomHEX';

import useUsers from '@/store/store';

import { Button, InputField } from '@/components';

import formSchema from '@/validation/formSchema';

interface TypePropsUncontrolledForm {
  onClose: () => void;
}
// const inputName = useRef<HTMLInputElement>(null);
// const inputGenderMale = useRef<HTMLInputElement>(null);
// const inputGenderFemale = useRef<HTMLInputElement>(null);

function UncontrolledForm({ onClose }: TypePropsUncontrolledForm) {
  const addUser = useUsers((state) => state.addUser);

  const [errors, setError] = useState<
    z.core.$ZodFormattedError<
      {
        name: string;
        email: string;
        age: number;
        password: string;
        confirmPassword: string;
      },
      string
    >
  >({ _errors: [] });

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formData = Object.fromEntries(form.entries());
    const validation = formSchema.safeParse(formData);

    if (!validation.success) {
      const errors = validation.error.format();
      setError(errors);
    } else {
      setError({ _errors: [] });
      addUser({
        name: formData.name.toString(),
        age: formData.age.toString(),
        password: formData.password.toString(),
        colorCard: randomHEX(),
      });
      onClose();
    }
  };

  return (
    <form
      onSubmit={(e) => submitForm(e)}
      className="flex flex-col justify-around items-center"
    >
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        error={errors.name && errors.name._errors.join(',')}
      />
      <InputField
        type="number"
        name="age"
        placeholder="Age"
        error={errors.age && errors.age._errors.join(',')}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        error={errors.email && errors.email._errors.join(',')}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        error={errors.password && errors.password._errors.join(',')}
      />
      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        error={
          errors.confirmPassword && errors.confirmPassword._errors.join(',')
        }
      />
      <div className="text-white flex items-center">
        Gender:
        <div>
          <input id="Male" type="radio" name="gender" value="Male" />
          <label htmlFor="Male">Male</label>
        </div>
        <div>
          <input type="radio" id="Female" name="gender" value="Female" />
          <label htmlFor="Female">Female</label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="scales" name="checkbox" />
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
      <Button styles={['hover:bg-blue-900']} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default UncontrolledForm;
