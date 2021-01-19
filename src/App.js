import './App.css';
import ButtonWithTheme from './ButtonWithTheme';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import ModalBodyExample from './ModalBodyExample';
import React, { useState } from "react";
import ThemeExample from './ThemeExample';
import { ArrayOfColors, FragmentShorthandWithColors, FragmentWithColors } from './NoWrapperExamples';
import { CancelSetStateExample, DontCancelSetStateExample, ReactHooksExample } from './CancelSetStateExample';
import { ComponentMissingProps, ComponentThrowsError } from './ComponentWithError';

function App () {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App" id="app-container">
      <header className="app-header">
        <h1>React 16 Feature Demo</h1>
      </header>

      <div className="feature-section">
        <h2>Portals</h2>
        <p>Portals are useful for modals where you want to add styles or click handlers without needing z-index because it renders the modal outside the app</p>
        <ButtonWithTheme variant="primary" onClick={() => setModalShow(true)}>
          Launch modal
        </ButtonWithTheme>
        <Modal>
          <ModalBodyExample show={modalShow} onHide={() => setModalShow(false)} />
        </Modal>
      </div>

      <div className="feature-section">
        <h2>Render without Wrapper Component</h2>
        <p>A wrapper component is no longer required for react elements.  There are 3 alternatives:</p>
        <p>React v16.0 - Return an array of elements</p>
        <ul>
          <li>Green</li>
          <ArrayOfColors />
        </ul>
        <p>React v16.2 - Wrap in Fragment</p>
        <ul>
          <FragmentWithColors />
          <li>Navy</li>
        </ul>
        <p>React v16.2 - Short syntax for fragment</p>
        <ul>
          <li>Magenta</li>
          <FragmentShorthandWithColors />
          <li>Aqua</li>
        </ul>
      </div>

      <div className="feature-section">
        <h2>ComponentDidCatch</h2>
        <p>A new lifecycle method that can be used to handle errors thrown by React components. Best use case is to have an ErrorBoundary HOC component to wrap any component that may throw errors in</p>
        <p className="bold">With Error Boundary</p>
        <p>Note: In development environment you will always see the error overlay unless you turn it off or close it with the X button. So close to see the message that will show when not dev.</p>
        <ErrorBoundary>
          <ComponentThrowsError />
        </ErrorBoundary>
        <p className="bold">Without Error Boundary</p>
        <ComponentThrowsError />
        <p className="bold">With Error Boundary Missing Props</p>
        <ErrorBoundary>
          <ComponentMissingProps user={{}}/> 
        </ErrorBoundary>
      </div>

      <div className="feature-section">
        <h2>Cancel setState</h2>
        <p>Prevent re-rendering components when changes are made if state has not changed by returning null instead of setting state</p>
        <p className="bold">Don't Cancel Example</p>
        <DontCancelSetStateExample />
        <p className="bold">Cancel Example</p>
        <CancelSetStateExample />
        <p className="bold">Cancel with React Hook Example</p>
        <p>Note: Hooks can only be used in functional components, not class.</p>
        <ReactHooksExample />
      </div>

      <div className="feature-section">
        <h2>contextAPI</h2>
        <p>
          A good way to easily use global variables, such as theme, without prop drilling (having to pass down to every component). 
          Best to use for variables that are set once and not variables that change often because it can be slow.
          Useful for things like theme, admin, language.
        </p>
        <ThemeExample />
      </div>
    </div>
  );
}

export default App;
