import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function FormModal({title, ...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Created At</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>{' '}
        <Button variant="danger" onClick={props.onHide}>Close</Button>
       </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;