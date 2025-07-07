import { Component } from 'react';

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

  render() {
    if (this.state.hasError) {
      return <div className="h-screen bg-amber-500">Somthing went wrong</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
