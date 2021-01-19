import React from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContextConsumer } from './ThemeContext';

function ComponentThatUsesTheme (props) {
  return (
    <ThemeContextConsumer>
        {context => (
          <Button variant={props.variant} onClick={props.onClick} className={`${context.theme}-${props.variant}-button`}>
            {props.children}
          </Button>
        )}
    </ThemeContextConsumer>

  );   
}

export default ComponentThatUsesTheme;
