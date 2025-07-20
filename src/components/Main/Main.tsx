import { Component } from 'react';

import { CardList } from '@/components';
import { BuggyButton } from '@/components';

import type { typeProps } from '@/types/types';

class Main extends Component<{
  states: typeProps;
  getByRequest: (name?: string) => Promise<void>;
}> {
  render() {
    return (
      <main data-testid="Main" className="flex flex-col px-12">
        <CardList
          states={this.props.states}
          getByRequest={this.props.getByRequest}
        />
        <BuggyButton
          styles={['fixed right-0 bottom-0 bg-red-900 hover:bg-red-800']}
        />
      </main>
    );
  }
}

export default Main;
