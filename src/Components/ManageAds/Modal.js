import React, { useState } from 'react';
import { Button, Modal, Form , FloatingLabel, ToggleButton, ButtonGroup} from 'react-bootstrap';

function FormModal({title, ...props}) {

  const [adTypesValue, setAdTypesValue] = useState("image");
  const adTypes = [
    { name: "image", value: "image" },
    { name: "code", value: "code" }
  ];
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
       <Form.Label>Location</Form.Label>
        <Form.Select aria-label="ads">
          <option>Select ...</option>
          <option value="1">Home Footer</option>
          <option value="2">Category Footer</option>
          <option value="1">Recipes Footer</option>
          <option value="2">Tricks Footer</option>
          <option value="1">Home Side 1</option>
          <option value="1">Recipe Side 1</option>
          <option value="2">Tricks Side 1</option>
          <option value="1">Home Side 2</option>
          <option value="1">Recipe Side 2</option>
          <option value="2">Tricks Side 2</option>
          <option value="1">Recipe Footer</option>
        </Form.Select>
        <Form.Group className="my-3" >
          <Form.Label>Ad Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>



        <Form.Group className="mb-3" >

        <p>Ad Type</p>
        <Form.Group className="my-3">
        {adTypes.map((adType, index) => (
          <Form.Check
           inline
            key={index}
            label={adType.value}
            type="radio"
            name="adtype"
            value={adType.value}
            checked={adTypesValue === adType.value}
            onChange={e => setAdTypesValue(e.target.value)}
          />
        ))}
        </Form.Group>
          {
            adTypesValue === 'image'? (
              <>
                <Form.Group className="my-3" >
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="my-3" >
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file"/>
                </Form.Group>
              </>
            ):(
              <FloatingLabel label="code">
                <Form.Control
                  as="textarea"
                  placeholder="code"
                />
              </FloatingLabel>
            )
          }
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>{' '}
        <Button variant="danger" onClick={props.onHide}>Close</Button>
       </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;