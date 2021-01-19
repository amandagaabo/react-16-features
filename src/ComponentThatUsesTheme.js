import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

function ComponentThatUsesTheme () {
  return (
    <ThemeContextConsumer>
        {context => (
            <div className={`${context.theme}-container theme-example`}>
                <p>The theme is {context.theme}</p>
            </div>
        )}
    </ThemeContextConsumer>

  );   
}

export default ComponentThatUsesTheme;
