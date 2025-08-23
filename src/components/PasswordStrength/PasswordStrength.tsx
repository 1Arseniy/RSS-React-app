interface TypePasswordStrength {
  strLength: number;
}

function PasswordStrength({ strLength }: TypePasswordStrength) {
  const showStrengt = () => {
    if (strLength >= 1 && strLength <= 4) {
      return <span className="text-[12px] text-red-500">Easy password</span>;
    } else if (strLength > 4 && strLength <= 7) {
      return (
        <span className="text-[12px] text-yellow-500">Medium password</span>
      );
    } else if (strLength >= 8) {
      return (
        <span className="text-[12px] text-green-400">Difficult password</span>
      );
    }
  };

  return <div className="h-8 flex items-center w-[190px]">{showStrengt()}</div>;
}

export default PasswordStrength;
