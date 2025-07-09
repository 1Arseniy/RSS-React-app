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
    const name = localStorage.getItem('name');
    await this.props.getByRequest(name ? name : '');
  }

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        {this.props.loading || !this.props.characterByRequest ? (
          <div className="flex items-center h-[76vh]">
            {this.props.loading ? (
              <LuLoaderCircle className="text-blue-500 size-24 animate-spin" />
            ) : (
              <h1 className="text-3xl text-white">Character not found</h1>
            )}
          </div>
        ) : (
          this.props.characterByRequest.map((character) => (
            <Card key={crypto.randomUUID()} obj={character} />
          ))
        )}
      </div>
    );
  }
}

export default CardList;
