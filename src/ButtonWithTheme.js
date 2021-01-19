import React from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContextConsumer } from './ThemeContext';

function ButtonWithTheme (props) {
  return (
    <ThemeContextConsumer>
        {context => (
          <Button variant={props.variant} onClick={props.onClick} className={`${context.theme}-${props.variant}-button`} value={props.value}>
            {props.children}
          </Button>
        )}
    </ThemeContextConsumer>

  );   
}

export default ButtonWithTheme;
