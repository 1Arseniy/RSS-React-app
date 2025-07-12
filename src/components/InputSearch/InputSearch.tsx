import { Component } from 'react';

class InputSearch extends Component<{
  setText: (name: string) => void;
  InputValue: string;
}> {
  setValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.setText(event.target.value);
  }
  render() {
    return (
      <input
        type="text"
        value={this.props.InputValue}
        onChange={(e) => this.setValue(e)}
        placeholder="Search by name..."
        name="search"
        className="h-9 bg-white rounded-sm pl-2 focus-within:outline-2 focus-within:outline-blue-700"
      />
    );
  }
}

export default InputSearch;
