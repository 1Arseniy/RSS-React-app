import { Component } from 'react';
import type { typeCharacter } from '../../types/types';
import { getCharaters } from '../../client/getCharacters';
import Card from '../Card/Card';

class CardList extends Component<unknown, { characters: typeCharacter[] }> {
  state = { characters: [] };

  async componentDidMount() {
    this.setState({ characters: await getCharaters() });
  }

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        {this.state.characters.map((character) => (
          <Card key={crypto.randomUUID()} obj={character} />
        ))}
      </div>
    );
  }
}

export default CardList;
