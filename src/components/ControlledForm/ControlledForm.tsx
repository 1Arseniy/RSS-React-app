import { useForm, type SubmitHandler } from 'react-hook-form';

import type { TypeUser } from '@/types/types';

// interface TypeControlledForm {

// }

function ControlledForm() {
  const { register, handleSubmit } = useForm<TypeUser>();

  const submitForm: SubmitHandler<TypeUser> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col justify-around items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <input type="text" {...register('name')} />
    </form>
  );
}

export default ControlledForm;
