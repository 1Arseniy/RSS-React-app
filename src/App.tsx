import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import type { typeCharacter } from './types/types';
import { getCharaters } from './client/getCharacters';

class App extends Component<
  object,
  { characterByRequest: typeCharacter[]; loading: boolean; error: boolean }
> {
  state = { characterByRequest: [], loading: true, error: false };

  getByRequest = async (name?: string) => {
    try {
      this.setState({ loading: true });
      this.setState({
        characterByRequest: await getCharaters(name),
      });
    } catch {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
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
