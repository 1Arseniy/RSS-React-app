import { Component } from 'react';
import Button from '../Button/Button';
import InputSearch from '../InputSearch/InputSearch';

class Header extends Component<
  { getByRequest: (name: string) => Promise<void> },
  { text: string }
> {
  state = { text: '' };

  getName = async () => {
    const deleteSpaces = this.state.text.trim();
    this.setState({ text: deleteSpaces });
    localStorage.setItem('name', deleteSpaces);
    await this.props.getByRequest(deleteSpaces);
  };

  setName = (name: string) => {
    this.setState({ text: name });
  };

  render() {
    return (
      <header className="h-[12vh] flex justify-center items-center">
        <InputSearch setName={this.setName} InputValue={this.state.text} />
        <Button onClick={this.getName}>Search</Button>
      </header>
    );
  }
}

export default Header;
