import { Component } from 'react';
import CardList from '../CardList/CardList';
import Button from '../Button/Button';

function error() {
  throw new Error('Error');
}

class Main extends Component {
  render() {
    return (
      <main className="flex flex-col">
        <CardList />
        <div>
          <Button onClick={error}>Error</Button>
        </div>
      </main>
    );
  }
}

export default Main;
