import { Component } from 'react';
import Button from '../Button/Button';

class BuggyButton extends Component<unknown, { error: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { error: false };
  }

  Click = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Error bomb');
    }

    return <Button onClick={this.Click}>Error</Button>;
  }
}

export default BuggyButton;
