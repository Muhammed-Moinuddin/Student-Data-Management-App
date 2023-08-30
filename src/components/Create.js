import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

export const Create = () => {
  return (
    <div>
        <Form className='d-grid gap-2' as={Row}>
            <Form.Group>
                <Form.Label className='mb-3'>Name</Form.Label>
                <Form.Control type='text' placeholder='John Doe'></Form.Control>
            </Form.Group>
        </Form>
    </div>
  )
}
