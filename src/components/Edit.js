import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import array from './Array.js';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

export const Edit = () => {

  //Making  useState for setting and fetching a value in jsx
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [classes, setClasses] = useState('');
  const [program, setProgram] = useState('');

  let history = useNavigate()

  var index = array.map(e => e.id).indexOf(id);

  const handleUpdate = (e) => {
    e.preventDefault();

    let ans = array[index];

    ans.name = name;
    ans.age = age;
    ans.class = classes;
    ans.program = program;

    history('/');
  }

  useEffect(() => {
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
    setClasses(localStorage.getItem('class'));
    setProgram(localStorage.getItem('program'));
    setId(localStorage.getItem('id'));
  },[])

  return (
    <Container>
           <Row className="justify-content-md-center">
            <Col>
              <Form className='d-grid gap-2' style={{margin:'10rem'}}>
              <h1 className='heading'>Edit Student Data</h1>
                <Form.Group controlId='formBasicName' className='mb-3'>
                    <Form.Control type='text' onChange={e => setName(e.target.value)} value={name} size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicAge' className='mb-3'>
                    <Form.Control type='number' onChange={e => setAge(e.target.value)} value={age} size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicClass' className='mb-3'>
                    <Form.Control type='text' onChange={e => setClasses(e.target.value)} value={classes} size="lg"></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicProgram' className='mb-3'>
                    <Form.Control type='text' onChange={e => setProgram(e.target.value)} value={program} size="lg"></Form.Control>
                </Form.Group>
                <Button variant="primary" type='submit' onClick={e => handleUpdate(e)} size="lg">Update</Button>
                <Link className="d-grid gap-2" to='/' style={{ textDecoration: 'none' }}>
                  <Button variant='warning' size='lg'>Home</Button>
                </Link>
              </Form>
            </Col>
        </Row>
      </Container>
  )
}
