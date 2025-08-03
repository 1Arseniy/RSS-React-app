import useTheme from '@/hooks/useTheme';
import type { ReactNode } from 'react';
interface TypePropsButton {
  children: ReactNode;
  onClick?: () => void;
  styles?: string[];
  disabled?: boolean;
}

function Button(props: TypePropsButton) {
  const { children, onClick, styles, disabled } = props;
  const { darkTheme } = useTheme();

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-7 rounded-sm py-2 cursor-pointer  disabled:cursor-default  ${darkTheme ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900' : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-200'}  ${styles ? styles.join(' ') : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
