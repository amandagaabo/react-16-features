import React from 'react';
import ButtonWithTheme from './ButtonWithTheme';
import { Modal } from 'react-bootstrap';

function ModalBodyExample (props) {
  return (
    <Modal show={props.show} onHide={props.onHide} id="modal-example">
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <ButtonWithTheme variant="secondary" onClick={props.onHide}>
          Close
        </ButtonWithTheme>
        <ButtonWithTheme variant="primary" onClick={props.onHide}>
          Save Changes
        </ButtonWithTheme>
      </Modal.Footer>
    </Modal>
  );   
}

export default ModalBodyExample;
