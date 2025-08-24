interface TypePasswordStrength {
  strLength: number;
}

function PasswordStrength({ strLength }: TypePasswordStrength) {
  const showStrength = () => {
    if (strLength >= 1 && strLength <= 2) {
      return <span className="text-[12px] text-red-500">Easy password</span>;
    } else if (strLength === 3) {
      return (
        <span className="text-[12px] text-yellow-500">Medium password</span>
      );
    } else if (strLength >= 4) {
      return (
        <span className="text-[12px] text-green-400">Difficult password</span>
      );
    }
  };

  return (
    <div className="h-8 flex items-center w-[190px]">{showStrength()}</div>
  );
}

export default PasswordStrength;
