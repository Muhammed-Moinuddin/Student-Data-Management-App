import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Create = () => {
  return (
        <Container>
           <Row className="justify-content-md-center">
            <Col>
              <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                <Form.Group controlId='formBasicName' className='mb-3'>
                    <Form.Control type='text' placeholder='Enter Name' size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicAge' className='mb-3'>
                    <Form.Control type='number' placeholder='Enter Age' size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicClass' className='mb-3'>
                    <Form.Control type='number' placeholder='Enter Class' size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicProgram' className='mb-3'>
                    <Form.Control type='number' placeholder='Enter Program' size="lg"></Form.Control>
                </Form.Group>
                <Button variant="primary" type='submit' size="lg">Submit</Button>
                <Link className="d-grid gap-2" to='/' style={{ textDecoration: 'none' }}>
                  <Button variant='info' size='lg'>Home</Button>
                </Link>
              </Form>
             
            </Col>
          </Row>
        </Container>
  )
}
