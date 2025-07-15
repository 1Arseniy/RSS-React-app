import { Component } from 'react';

import { Header } from '@/components';
import { Main } from '@/components';

import { getCharacters } from '@/client/getCharacters';

import type { typeCharacter } from '@/types/types';
class App extends Component<
  object,
  { characterByRequest: typeCharacter[]; loading: boolean; error: boolean }
> {
  state = { characterByRequest: [], loading: true, error: false };

  getByRequest = async (name?: string) => {
    try {
      this.setState({ loading: true });
      this.setState({
        characterByRequest: await getCharacters(name),
      });
    } catch {
      this.setState({ error: true });
    } finally {
      setTimeout(() => this.setState({ loading: false }), 300);
    }
  };

  render() {
    return (
      <>
        <Header getByRequest={this.getByRequest} />
        <Main states={this.state} getByRequest={this.getByRequest} />
      </>
    );
  }
}

export default App;
