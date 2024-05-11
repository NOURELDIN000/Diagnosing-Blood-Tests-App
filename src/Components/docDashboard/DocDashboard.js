import { Link } from 'react-router-dom';
import DocNavBar from '../DocNavBar/DocNavBar';
import  './docDashboard.css';
import Table from 'react-bootstrap/Table';

import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
const DocDashboard = () => {

const [doctors, setDoctors] = useState([]);











// function handleDelete(id) {
//   setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
// }



  return (
    <div className='docdashboard '>
        <DocNavBar/>
      <div className='row d-flex'>
        <div className='  col-3 col-md-4   col-lg-2 sidebar'>
          <Link className='dashSidebarLink'> get Patient Test</Link>
        </div>

        <div className='  col-9 col-md-8    col-lg-10  p-0'>
        <Table striped bordered  className=' '>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><RiDeleteBin6Line className='dashDelete'  /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><RiDeleteBin6Line className='dashDelete' /></td>
        </tr>
      </tbody>
    </Table>
        </div>
        
      </div>
    </div>
  )
}

export default DocDashboard
