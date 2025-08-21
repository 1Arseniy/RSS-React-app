import { useState, type FormEvent } from 'react';

import type z from 'zod';

import randomHEX from '@/utils/randomHEX';

import useUsers, { useCountries } from '@/store/store';

import { Button, InputField } from '@/components';

import formSchema from '@/validation/formSchema';

interface TypePropsUncontrolledForm {
  onClose: () => void;
}

function UncontrolledForm({ onClose }: TypePropsUncontrolledForm) {
  const addUser = useUsers((state) => state.addUser);
  const countries = useCountries();

  const [errors, setError] = useState<
    z.core.$ZodFormattedError<
      {
        name: string;
        email: string;
        age: number;
        password: string;
        confirmPassword: string;
        select: 'Male' | 'Female';
        checkbox: 'on';
        country: unknown;
        file: File;
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
      console.log(formData);
      addUser({
        name: formData.name.toString(),
        age: formData.age.toString(),
        password: formData.password.toString(),
        gender: formData.select.toString(),
        accept: formData.checkbox.toString(),
        country: formData.country.toString(),
        img: formData.file.toString(),
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
      <div>
        Gender:
        <select name="select">
          <option value="select" selected>
            select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <span className="text-red-500 h-10 text-[14px]">
        {errors.select && errors.select._errors.join(', ')}
      </span>
      <div className="flex flex-col">
        <InputField
          type="checkbox"
          name="checkbox"
          label="scales"
          error={errors.checkbox && errors.checkbox._errors.join(', ')}
        />
      </div>
      <InputField
        type="file"
        name="file"
        label="file"
        error={errors.file && errors.file._errors.join(', ')}
      />
      <input type="text" name="country" list="country" placeholder="Country" />
      <datalist id="country">
        {countries.countries.map((country, index) => (
          <option key={index}>{country}</option>
        ))}
      </datalist>
      <span className="text-red-500 h-10 text-[14px]">
        {errors.country && errors.country._errors.join(', ')}
      </span>
      <Button styles={['hover:bg-blue-900']} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default UncontrolledForm;
