import React from 'react';
import ButtonWithTheme from './ButtonWithTheme';

class ComponentThrowsError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    if (this.state.counter === 3) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <ButtonWithTheme variant="primary" onClick={this.handleClick}>{this.state.counter}</ButtonWithTheme>;
  }
}

function ComponentMissingProps (props) {
  return (
    <p>Name: {props.user.name}</p>
  )
}

export {
  ComponentThrowsError,
  ComponentMissingProps
}
