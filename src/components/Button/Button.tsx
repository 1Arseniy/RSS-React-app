import { Component } from 'react';

class Button extends Component<{
  children: React.ReactNode;
}> {
  render() {
    const { children } = this.props;

    return (
      <button className="bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5">
        {children}
      </button>
    );
  }
}

export default Button;
