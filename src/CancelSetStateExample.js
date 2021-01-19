import React, { useState } from 'react';
import ButtonWithTheme from './ButtonWithTheme';

class CancelSetStateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: ''
    };
  }

  handleButtonClick = event => {
    const buttonClicked = event.target.value;
    this.setState(
      prevState => (prevState.buttonClicked !== buttonClicked ? { buttonClicked } : null)
    );

    // same as this, but built in access to prevState if you use above
    // if (this.state.buttonClicked !== event.target.value) {
    //   this.setState({ buttonClicked: event.target.value})
    // }
  }

  render() {
    console.log('CANCEL RENDERED!')
    return (
      <div>
        <ButtonWithTheme variant="primary" value="primary" onClick={this.handleButtonClick}>Primary</ButtonWithTheme>
        <ButtonWithTheme variant="secondary" value="secondary" onClick={this.handleButtonClick}>Secondary</ButtonWithTheme>
        <p>Clicked: {this.state.buttonClicked}</p>
      </div>
    );
  }
}

class DontCancelSetStateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: ''
    };
  }

  handleButtonClick = event => {
    this.setState({ buttonClicked: event.target.value})
  }

  render() {
    console.log('DONT CANCEL RENDERED!')
    return (
      <div>
        <ButtonWithTheme variant="primary" value="primary" onClick={this.handleButtonClick}>Primary</ButtonWithTheme>
        <ButtonWithTheme variant="secondary" value="secondary" onClick={this.handleButtonClick}>Secondary</ButtonWithTheme>
        <p>Clicked: {this.state.buttonClicked}</p>
      </div>
    );
  }
}

function ReactHooksExample () {
  console.log('HOOKS RENDERED')
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div>
      <ButtonWithTheme variant="primary" onClick={() => setButtonClicked("primary")}>Primary</ButtonWithTheme>
      <ButtonWithTheme variant="secondary" onClick={() => setButtonClicked("secondary")}>Secondary</ButtonWithTheme>
      <p>Clicked: {buttonClicked}</p>
    </div>
  );
}

export {
  CancelSetStateExample,
  DontCancelSetStateExample,
  ReactHooksExample
};
