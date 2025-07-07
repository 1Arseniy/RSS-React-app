import { Component } from 'react';
import Button from '../Button/Button';
import InputSearch from '../InputSearch/InputSearch';

class Header extends Component {
  render() {
    return (
      <header className="h-24 flex justify-center items-center">
        <InputSearch />
        <Button>Search</Button>
      </header>
    );
  }
}

export default Header;
