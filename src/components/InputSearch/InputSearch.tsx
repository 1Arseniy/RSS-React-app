import { Component } from 'react';

class InputSearch extends Component<{ setName: (name: string) => void }> {
  state = { value: '' };

  setValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
    this.props.setName(event.target.value);
  }

  render() {
    return (
      <input
        onChange={(e) => this.setValue(e)}
        placeholder="Search by name..."
        name="search"
        className="h-9 bg-white rounded-sm pl-2 focus-within:outline-2 focus-within:outline-blue-700"
      />
    );
  }
}

export default InputSearch;
