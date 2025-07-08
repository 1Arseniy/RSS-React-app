import { Component } from 'react';
import CardList from '../CardList/CardList';
import BuggyButton from '../BuggyButton/BuggyButton';
import type { typeCharacter } from '../../types/types';

class Main extends Component<{
  characterByRequest: typeCharacter[];
  getByRequest: (name?: string) => Promise<void>;
  loading: boolean;
}> {
  render() {
    return (
      <main className="flex flex-col">
        <CardList
          characterByRequest={this.props.characterByRequest}
          getByRequest={this.props.getByRequest}
          loading={this.props.loading}
        />
        <div className="flex justify-end">
          <BuggyButton />
        </div>
      </main>
    );
  }
}

export default Main;
