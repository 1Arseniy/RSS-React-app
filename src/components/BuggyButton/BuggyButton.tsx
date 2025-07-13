import { Component } from 'react';
import Button from '../Button/Button';

class BuggyButton extends Component<{ styles: string[] }, { error: boolean }> {
  state = { error: false };

  Click = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Error bomb');
    }

    return (
      <Button styles={this.props.styles} onClick={this.Click}>
        Error
      </Button>
    );
  }
}

export default BuggyButton;
