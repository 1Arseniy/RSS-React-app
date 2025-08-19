import type { PropsWithChildren } from 'react';

interface typePropsButton {
  onClick?: () => void;
  styles?: string[];
  disabled?: boolean;
}

function Button({
  children,
  onClick,
  styles,
  disabled,
}: PropsWithChildren<typePropsButton>) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5 disabled:bg-blue-900 disabled:cursor-default  ${styles ? styles.join(' ') : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
