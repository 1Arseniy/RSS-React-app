import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button className={`bg-blue-700 text-white ${styles.button}`}>
        Click
      </button>
    );
  }
}

export default Button;
