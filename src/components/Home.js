import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Table} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import array from './array.js';


export const Home = () => {

  let text = '"No Data Found" Kindly enter some data'

  let history = useNavigate();

  function setId(id, name, age, classes, program){
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('class', classes);
    localStorage.setItem('program', program);
  }

  function deleted(id){

    var index = array.map((e) => e.id).indexOf(id);

    array.splice(index, 1)

    history('/')
  }

  return (
    <div className='main-div'>
      <h1 className='heading'>Student Data Management System</h1>
      <Table striped bordered hover>
        {
          array.length > 0 ?
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Program</th>
            <th></th>
            <th></th>
          </tr>
          </thead>  : text
          }
          {  
            array.map((item) => {
              return (
                <tbody>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.class}</td>
                    <td>{item.program}</td>
                    <td><Link to='/edit'><Button onClick={(e) => setId(item.id,item.name, item.age, item.class, item.program)} variant='info'>Edit</Button></Link></td>
                    <td><Link><Button onClick={e => deleted(item.id)} variant='danger'>Delete</Button></Link></td>
                  </tr>
                </tbody>
                
              )
            })
          }
          </Table>
        
       
       <Link className="d-grid gap-2 pt-2 buttonLink" to='/create'>
            <Button variant='warning' size='lg'>Create</Button>
       </Link>
    </div>
  )
}
