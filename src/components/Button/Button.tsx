import type { PropsWithChildren } from 'react';

interface TypePropsButton {
  onClick?: () => void;
  styles?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

function Button({
  children,
  onClick,
  styles,
  disabled,
  type,
}: PropsWithChildren<TypePropsButton>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5 disabled:bg-blue-900 disabled:cursor-default  ${styles ? styles : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
