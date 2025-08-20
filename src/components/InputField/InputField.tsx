interface TypePropsInputField {
  type: string;
  placeholder?: string;
  name: string;
  error?: string | undefined;
}

function InputField({ type, placeholder, name, error }: TypePropsInputField) {
  console.log(error);
  const renderField = () => {
    switch (type) {
      case 'checkbox':
        return <input type="checkbox" />;

      default:
        return <input type={type} name={name} placeholder={placeholder} />;
    }
  };

  return (
    <>
      {renderField()}
      {error && (
        <span className="flex items-center h-10 text-red-500">{error}</span>
      )}
      {!error && <span className="h-10"></span>}
    </>
  );
}

export default InputField;
