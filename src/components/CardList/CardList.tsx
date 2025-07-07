import { Component } from 'react';
import type { typeCharacter } from '../../types/types';
import { getCharaters } from '../../client/getCharacters';
import { LuLoaderCircle } from 'react-icons/lu';
import Card from '../Card/Card';

class CardList extends Component<
  unknown,
  { characters: typeCharacter[]; loading: boolean }
> {
  state = { characters: [], loading: true };

  async componentDidMount() {
    try {
      this.setState({ characters: await getCharaters() });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        {this.state.loading ? (
          <div className="h-screen">
            <LuLoaderCircle className="text-blue-500 size-24 animate-spin" />
          </div>
        ) : (
          this.state.characters.map((character) => (
            <Card key={crypto.randomUUID()} obj={character} />
          ))
        )}
      </div>
    );
  }
}

export default CardList;
