import { Component } from 'react';
import Button from '../Button/Button';

class ErrorBoundary extends Component<
  {
    children: React.ReactNode;
  },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  refreshPage() {
    const startPage = 0;
    history.go(startPage);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen bg-red-700 text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl">Something went wrong...</h1>
          <Button
            styles={['bg-red-900', 'hover:bg-red-800']}
            onClick={this.refreshPage}
          >
            Refresh
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
