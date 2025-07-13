import { Component } from 'react';
import Button from '../Button/Button';
import InputSearch from '../InputSearch/InputSearch';
class Header extends Component<
  { getByRequest: (name: string) => Promise<void> },
  { text: string }
> {
  state = { text: localStorage.getItem('name') || '' };

  getText = async () => {
    const deleteSpaces = this.state.text.trim();
    this.setState({ text: deleteSpaces });
    localStorage.setItem('name', deleteSpaces);
    await this.props.getByRequest(deleteSpaces);
  };

  setText = (name: string) => {
    this.setState({ text: name });
  };

  render() {
    return (
      <header className="h-[12vh] flex justify-center items-center">
        <InputSearch setText={this.setText} InputValue={this.state.text} />
        <Button onClick={this.getText}>Search</Button>
      </header>
    );
  }
}

export default Header;
