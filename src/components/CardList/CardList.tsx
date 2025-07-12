import { Component } from 'react';
import type { typeProps } from '../../types/types';
import { LuLoaderCircle } from 'react-icons/lu';
import Card from '../Card/Card';
class CardList extends Component<{
  states: typeProps;
  getByRequest: (name?: string) => Promise<void>;
}> {
  async componentDidMount() {
    const name = localStorage.getItem('name');
    await this.props.getByRequest(name ? name : '');
  }

  render() {
    const { loading, characterByRequest, error } = this.props.states;
    return (
      <div className={`flex flex-wrap justify-center`}>
        {loading || !characterByRequest || error ? (
          <div className="flex items-center h-[76vh] text-3xl text-center text-white">
            {loading ? (
              <LuLoaderCircle className="text-blue-500 size-24 animate-spin" />
            ) : !error ? (
              <h1>Сharacter with this name not found</h1>
            ) : (
              <h1>Server not responding, try later</h1>
            )}
          </div>
        ) : (
          characterByRequest.map((character) => (
            <Card key={crypto.randomUUID()} character={character} />
          ))
        )}
      </div>
    );
  }
}

export default CardList;
