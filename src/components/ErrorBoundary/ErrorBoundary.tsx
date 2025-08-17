'use client';

import { Component } from 'react';

import type { ErrorInfo, ReactNode } from 'react';

import { Button } from '@/components';
class ErrorBoundary extends Component<
  {
    children: ReactNode;
  },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  refreshPage = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
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
