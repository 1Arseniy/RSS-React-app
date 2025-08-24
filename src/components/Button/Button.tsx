import type { PropsWithChildren } from 'react';

interface TypePropsButton {
  onClick?: () => void;
  styles?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  tabIndex?: number;
}

function Button({
  children,
  onClick,
  styles,
  disabled,
  type,
  tabIndex,
}: PropsWithChildren<TypePropsButton>) {
  return (
    <button
      tabIndex={tabIndex}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`bg-neutral-700 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-neutral-800 m-5 disabled:bg-neutral-600 disabled:cursor-default  ${styles ? styles : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
