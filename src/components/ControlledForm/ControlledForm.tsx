import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button, InputField, PasswordStrength } from '@/components';

import { controlledSchema } from '@/validation/formSchema';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import useUsers, { useCountries } from '@/store/store';

import randomHEX from '@/utils/randomHEX';
import { toBase64 } from '@/utils/toBase64';

interface TypePropsControlledForm {
  onClose: () => void;
}

type fields = z.infer<typeof controlledSchema>;

function ControlledForm({ onClose }: TypePropsControlledForm) {
  const addUser = useUsers((state) => state.addUser);
  const countries = useCountries();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<fields>({
    resolver: zodResolver(controlledSchema),
  });

  const password = watch('password');
  const submitForm: SubmitHandler<fields> = async (data) => {
    const file = await toBase64(data.fileControlled[0]);
    addUser({
      name: data.name,
      age: data.age,
      password: data.password,
      gender: data.select,
      accept: String(data.checkboxControlled),
      img: file,
      country: data.country,
      colorCard: randomHEX(),
      email: data.email,
    });
    onClose();
  };

  return (
    <form
      className="flex flex-col justify-around items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <InputField
        type="text"
        placeholder="Name"
        register={register('name')}
        name="name"
        error={errors.name && errors.name.message}
      />
      <InputField
        type="number"
        name="age"
        placeholder="Age"
        register={register('age')}
        error={errors.age && errors.age.message}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        register={register('email')}
        error={errors.email && errors.email.message}
      />
      <PasswordStrength strLength={password ? password.length : 0} />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        register={register('password')}
        error={errors.password && errors.password.message}
      />
      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        register={register('confirmPassword')}
        error={errors.confirmPassword && errors.confirmPassword.message}
      />
      <div>
        Gender:
        <select {...register('select')}>
          <option value="select" selected>
            select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <span className="text-red-500 h-10 text-[14px]">
        {errors.select && errors.select.message}
      </span>
      <div className="flex flex-col">
        <InputField
          type="checkbox"
          name="checkbox"
          label="checkbox"
          register={register('checkboxControlled')}
          error={errors.checkboxControlled && errors.checkboxControlled.message}
        />
      </div>
      <InputField
        type="file"
        name="file"
        label="file"
        register={register('fileControlled')}
        error={
          errors.fileControlled && errors.fileControlled.message?.toString()
        }
      />
      <input
        type="text"
        {...register('country')}
        list="country"
        placeholder="Country"
      />
      <datalist id="country">
        {countries.countries.map((country, index) => (
          <option key={index}>{country}</option>
        ))}
      </datalist>
      <span className="text-red-500 h-10 text-[14px]">
        {errors.country && errors.country.message}
      </span>
      <Button
        styles={'hover:bg-blue-900'}
        type="submit"
        disabled={Object.keys(errors).length > 0}
      >
        Submit
      </Button>
    </form>
  );
}

export default ControlledForm;
