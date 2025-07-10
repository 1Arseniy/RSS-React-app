import { Component, type ErrorInfo } from 'react';
import Button from '../Button/Button';
class ErrorBoundary extends Component<
  {
    children: React.ReactNode;
  },
  { errorInfo: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { errorInfo: '' };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (errorInfo.componentStack) {
      this.setState({ errorInfo: errorInfo.componentStack });
    }
    console.log(error, errorInfo);
  }

  refreshPage() {
    const startPage = 0;
    history.go(startPage);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="h-screen bg-red-700  flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center text-white">
            Something went wrong, the button below should help
          </h1>
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
