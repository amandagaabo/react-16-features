import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null
  }

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch (error, errorInfo) {
    this.setState({ error })
  }

  render () {
    if (this.state.hasError) {
      return (
          <p style={{color: 'red'}}>Something went wrong</p>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
