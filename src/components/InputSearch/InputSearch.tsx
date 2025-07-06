import { Component } from 'react';

class InputSearch extends Component {
  render() {
    return (
      <input
        placeholder="Search..."
        className="h-9 bg-white rounded-sm pl-2 focus-within:outline-2 focus-within:outline-blue-700"
      />
    );
  }
}

export default InputSearch;
