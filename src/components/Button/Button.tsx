import { Component } from 'react';

class Button extends Component<{
  children: React.ReactNode;
  onClick?: () => void;
  styles?: string[];
}> {
  render() {
    const { children, onClick, styles } = this.props;

    return (
      <button
        onClick={onClick}
        className={`bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5 ${styles ? styles.join(' ') : ''}`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
