import React from 'react';
import ComponentThatUsesTheme from './ComponentThatUsesTheme';
import ButtonWithTheme from './ButtonWithTheme';
import { ThemeContextConsumer } from "./ThemeContext";

function ThemeExample () {
  return (
    <ThemeContextConsumer>
      {context => (
        <>
          <ButtonWithTheme variant="secondary" onClick={context.toggleTheme}>
            Toggle Theme
          </ButtonWithTheme>
          <ComponentThatUsesTheme />
        </>

      )}
    </ThemeContextConsumer>
  );   
}

export default ThemeExample;
