import React from 'react';
import { Table } from 'react-bootstrap';

const NewsLetters = () => {
    return (
        <>
        <div className='flex justify-end my-1'>
            <button className='bg-green-500 text-white px-4 py-1 my-1'>Export Newsletters email</button>
        </div>
        <div className='bg-red-100'>
            <h1 className='font-bold text-2xl '>Newsletters</h1>
       
        <div>
            <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>Email</th>
      <th>Created </th>
      <th>Action </th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>lorem Epsum</td>
      <td>lorem Epsum</td>
      <td>
         <button className='bg-red-500 px-4 py-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>Delete</button>
      </td>
    
    </tr>
    <tr>
    <td>lorem Epsum</td>
    <td>lorem Epsum</td>
      <td>
         <button className='bg-red-500 px-4 py-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>Delete</button>
      </td>
     
    </tr>
   
  </tbody>
</Table>
</div>
            
        </div>
        </>
    );
};

export default NewsLetters;