import { Component } from 'react';
import CardList from '../CardList/CardList';
import BuggyButton from '../BuggyButton/BuggyButton';

class Main extends Component {
  render() {
    return (
      <main className="flex flex-col">
        <CardList />
        <div className="flex justify-end">
          <BuggyButton />
        </div>
      </main>
    );
  }
}

export default Main;
