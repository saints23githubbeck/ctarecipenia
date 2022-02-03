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
          <Form.Label>Phone no</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Url</Form.Label>
          <Form.Control type="text" placeholder="Enter Url" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Api</Form.Label>
          <Form.Control type="text" placeholder="Enter Api" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Location" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>{' '}
        <Button variant="danger" onClick={props.onHide}>Close</Button>
       </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;