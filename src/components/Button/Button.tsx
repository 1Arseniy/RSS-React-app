import type { ReactNode } from 'react';
interface typePropsButton {
  children: ReactNode;
  onClick?: () => void;
  styles?: string[];
}

function Button(props: typePropsButton) {
  const { children, onClick, styles } = props;

  return (
    <button
      onClick={onClick}
      className={`bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5 ${styles ? styles.join(' ') : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
