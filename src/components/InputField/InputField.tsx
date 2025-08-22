import type { UseFormRegisterReturn } from 'react-hook-form';

interface TypePropsInputField {
  type: string;
  placeholder?: string;
  name?: string;
  error?: string | undefined;
  register?: UseFormRegisterReturn;
  label?: string;
}

function InputField({
  type,
  placeholder,
  name,
  error,
  register,
  label,
}: TypePropsInputField) {
  const renderField = () => {
    switch (type) {
      case 'checkbox':
        return (
          <>
            <label htmlFor={label}>
              Accept Terms and Conditions agreement
              <input
                type={type}
                id={label}
                name={name}
                className="ml-1"
                {...register}
              />
            </label>
          </>
        );

      case 'file':
        return (
          <>
            <input
              type={type}
              id={label}
              name={name}
              className="hidden"
              {...register}
            />
            <label htmlFor={label} className="cursor-pointer">
              Choose file
            </label>
          </>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register}
          />
        );
    }
  };

  return (
    <>
      {renderField()}
      {error && (
        <span className="flex items-center justify-center h-10 text-red-500 text-[14px] text-center p-3">
          {error}
        </span>
      )}
      {!error && <span className="h-10"></span>}
    </>
  );
}

export default InputField;
