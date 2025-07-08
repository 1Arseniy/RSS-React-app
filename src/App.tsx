import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import type { typeCharacter } from './types/types';
import { getCharaters } from './client/getCharacters';

class App extends Component<
  unknown,
  { characterByRequest: typeCharacter[]; loading: boolean }
> {
  state = { characterByRequest: [], loading: true };

  getByRequest = async (name?: string) => {
    try {
      this.setState({ loading: true });
      this.setState({ characterByRequest: await getCharaters(name) });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
        <Header getByRequest={this.getByRequest} />
        <Main
          characterByRequest={this.state.characterByRequest}
          getByRequest={this.getByRequest}
          loading={this.state.loading}
        />
      </>
    );
  }
}

export default App;
