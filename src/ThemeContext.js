import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'blue'
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === 'blue' ? 'pink' : 'blue'
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ 
            theme: this.state.theme, 
            toggleTheme: this.toggleTheme 
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
