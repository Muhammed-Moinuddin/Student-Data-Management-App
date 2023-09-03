import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import array from './Array.js'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export const Create = () => {

  //Making  useState for setting and fetching a value in jsx
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [classes, setClasses] = useState('');
  const [program, setProgram] = useState('');

  //using useNavigate for redirecting to pages
  let history = useNavigate();

  //function for data entry
  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0,8);

    array.push({id: uniqueId, name: name, age: age, class: classes, program: program})

    history('/');
  }


  return (
        <Container>
           <Row className="justify-content-md-center">
            <Col>
              <Form className='d-grid gap-2' style={{margin:'10rem'}}>
              <h1 className='heading'>Create Student Data</h1>
                <Form.Group controlId='formBasicName' className='mb-3'>
                    <Form.Control onChange={e => setName(e.target.value)} type='text' placeholder='Enter Name' size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicAge' className='mb-3'>
                    <Form.Control onChange={e => setAge(e.target.value)} type='number' placeholder='Enter Age' size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicClass' className='mb-3'>
                    <Form.Control onChange={e => setClasses(e.target.value)} type='text' placeholder='Enter Class' size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicProgram' className='mb-3'>
                    <Form.Control onChange={e => setProgram(e.target.value)} type='text' placeholder='Enter Program' size="lg"></Form.Control>
                </Form.Group>
                <Button onClick={e => handleSubmit(e)} variant="primary" type='submit' size="lg">Submit</Button>
                <Link className="d-grid gap-2" to='/' style={{ textDecoration: 'none' }}>
                  <Button variant='info' size='lg'>Home</Button>
                </Link>
              </Form>
             
            </Col>
          </Row>
        </Container>
  )
}
