import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyRecipes = () => {
    const [recipe , setRecipe ] = useState([]);

    useEffect(() => {
        fetch('./fakeProduct.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className='px-2'>
            <div >
                <h1 className='text-2xl font-bold bg-red-100 px-2 py-2'>My Recipes</h1>
            </div>

            <div>
                <div>
                <Table striped bordered hover>
                    <thead>
                        <tr className=''>
                            <th className='py-2'>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Catagory</th>
                            <th>Status</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center items-center'>
                       {
                           recipe.map(res =>  <tr>
                            <td>{res.id}</td>
                            <td className='flex justify-center items-center'><img src={res.img} className='h-16'/></td>
                            <td>{res.category}</td>
                            <td>{res.name}</td>
                            <td>{res.price}</td>
                            <td>Active</td>
                           
                            <td>One month ago</td>
                            <td><div>
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                </div>
                                



                            </div></td>
                            </tr>)
                       }
                       
                    </tbody>
                </Table>
                    
                </div>
                
            </div>
        </div>
    );
};

export default MyRecipes;