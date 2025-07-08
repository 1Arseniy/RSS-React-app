import { Component } from 'react';
import type { typeCharacter } from '../../types/types';
import { LuLoaderCircle } from 'react-icons/lu';
import Card from '../Card/Card';

class CardList extends Component<{
  characterByRequest: typeCharacter[];
  getByRequest: (name?: string) => Promise<void>;
  loading: boolean;
}> {
  async componentDidMount() {
    await this.props.getByRequest();
  }

  render() {
    console.log(';ll', this.props.characterByRequest);
    return (
      <div className="flex flex-wrap justify-center">
        {this.props.loading ? (
          <div className="h-screen">
            <LuLoaderCircle className="text-blue-500 size-24 animate-spin" />
          </div>
        ) : this.props.characterByRequest ? (
          this.props.characterByRequest.map((character) => (
            <Card key={crypto.randomUUID()} obj={character} />
          ))
        ) : (
          <div className="h-screen text-white text-2xl">
            <h1>Character not found</h1>
          </div>
        )}
      </div>
    );
  }
}

export default CardList;
