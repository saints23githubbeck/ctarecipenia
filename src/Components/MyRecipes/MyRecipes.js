import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddRecipe from '../AddRecipe/AddRecipe';
import swal from 'sweetalert';

const axios = require( 'axios' );

const fakeData = [
    {
        img: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg",
        id: 1,
        category: "Food",
        name: "Hello",
        price: 5000,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg",
        id: 1,
        category: "Food",
        name: "Hello",
        price: 5000,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg",
        id: 1,
        category: "Food",
        name: "Hello",
        price: 5000,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg",
        id: 1,
        category: "Food",
        name: "Hello",
        price: 5000,
    },
]


const MyRecipes = () => {
    const [ recipe, setRecipe ] = useState( [] );
    const [ open, setOpen ] = useState( false );

    const getRecipes = () => {
        axios.get( "http://localhost:8000/recipes" ).then( ( res ) => {
            setRecipe( res.data.recipes );
        } );
    }

    useEffect( () => {
        getRecipes();
    }, [] );


    const handleDelete = ( id ) => {
        swal( {
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this recipe!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        } ).then( () => {
            axios
                .delete( `http://localhost:8000/recipe/${id}` )
                .then( function ( res ) {
                    if ( res.data.message ) {
                        const remainingRecipes = recipe.filter( ( r ) => r._id !== id );
                        setRecipe( remainingRecipes );
                    }
                } );
        } );
    };


    return (
        <div className='px-2'>

            {
                open && <AddRecipe open={open} setOpen={setOpen} />
            }
            <div >
                <h1 className='text-2xl font-bold bg-red-100 px-2 py-2 text-center'>My Recipes</h1>
            </div>
            <div className='text-end'>
                <button onClick={() => setOpen( !open )} className='btn btn-secondary mb-3'>Add Recipe</button>
            </div>
            <div>
                <div>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
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
                                recipe.map( ( res, idx ) =>
                                    <tr>
                                        <td className='text-center'>{idx + 1}</td>
                                        <td className='flex justify-center items-center text-center'><img src={res.img} className='h-8' /></td>
                                        <td className='text-center'>{res.category}</td>
                                        <td className='text-center'>{res.name}</td>
                                        <td className='text-center'>{res.price}</td>
                                        <td className='text-center'>Active</td>
                                        <td className='text-center'>
                                            <div>
                                                <div className=''>
                                                    <span className='mr-3 cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  inline text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span className='mr-3 cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </span>
                                                    <span onClick={() => handleDelete( res._id )} className='mr-3 cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </span>


                                                </div>

                                            </div></td>
                                    </tr> )
                            }

                        </tbody>
                    </Table>

                </div>

            </div>
        </div>
    );
};

export default MyRecipes;