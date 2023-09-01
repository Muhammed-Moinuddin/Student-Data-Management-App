import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Table} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import array from './Array.js';


export const Home = () => {
  return (
    <div className='main-div'>
      <h1 className='heading'>Student Data Management System</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Program</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
            {
              array.map((item) => {
                return (
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.class}</td>
                      <td>{item.program}</td>
                      <td><Link to='/edit'><Button variant='info'>Edit</Button></Link></td>
                      <td><Link><Button variant='danger'>Delete</Button></Link></td>
                    </tr>
                  </tbody>
                )
              })
            }
          
        
       </Table>
       <Link className="d-grid gap-2 buttonLink" to='/create'>
            <Button variant='warning' size='lg'>Create</Button>
       </Link>
    </div>
  )
}
