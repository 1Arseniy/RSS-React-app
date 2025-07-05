import { Component } from 'react';
import CardList from '../CardList/CardList';
import Button from '../Button/Button';

class Main extends Component {
  render() {
    return (
      <main className="flex">
        <CardList />
        <div>
          <Button>Error</Button>
        </div>
      </main>
    );
  }
}

export default Main;
