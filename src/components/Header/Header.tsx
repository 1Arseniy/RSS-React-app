import { Component } from 'react';
import Button from '../Button/Button';
import InputSearch from '../InputSearch/InputSearch';

class Header extends Component<
  { getByRequest: (name: string) => Promise<void> },
  { text: string }
> {
  state = { text: '' };

  getName = async () => {
    await this.props.getByRequest(this.state.text);
  };

  setName = (name: string) => {
    this.setState({ text: name });
  };

  render() {
    return (
      <header className="h-24 flex justify-center items-center">
        <InputSearch setName={this.setName} />
        <Button onClick={this.getName}>Search</Button>
      </header>
    );
  }
}

export default Header;
