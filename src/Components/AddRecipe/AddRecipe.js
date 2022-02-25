
import { Button, Container, TextField } from "@mui/material"
import React, { useState, useRef } from "react"
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";

import { addRecipe } from '../../appState/recipe/actions';

import "./AddRecipe.css"
// import swal from 'sweetalert';


const AddRecipe = () => {

    const dispatch = useDispatch();

    const nameRef = useRef()
    const categoryRef = useRef()
    // const tagsRef = useRef()
    const infoRef = useRef()
    const ingredientsRef = useRef()
    const factsRef = useRef()

    const [ selectedFile, setSelectedFile ] = useState("")

    const [ newTag, setNewTag ] = useState( "" );
    const [ tags, setTags ] = useState( [] )
    const tagName = ( e ) => {
        let tag = e.target.value;
        tag !== "" && setNewTag( tag );
    }
    const handleAddTag = () => {
        if ( newTag ) {
            setTags( [ ...tags, newTag ] );
            setNewTag( "" );
        }
    }

    const handleimages = (file) => {
        console.log(file)
        setSelectedFile(file.base64);
      }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const recipe = {
            name: nameRef.current.value,
            info: infoRef.current.value,
            category: categoryRef.current.value,
            ingredients: ingredientsRef.current.value,
            facts: factsRef.current.value,
            image: selectedFile
        }
        dispatch(addRecipe(recipe));
      }

    return (
     <div>
       <div className="container">
            <div className=' z-50 min-h-screen bg-gray-300 ' aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className='w-full'>
                <Container>
                    <div className="row">
                    <div className="col-md-7 mx-auto add-recipe-container">
                        <div>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                            className="input-fuild" 
                            inputRef={nameRef}
                            name="name" 
                            label="Recipe Name" 
                            variant="outlined"/>
                            <select 
                            name="category"
                            ref={categoryRef} 
                            className="form-control my-3 p-3 bg-gray-400">
                                <option>Choose Category</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                            <TextField 
                              id="outlined-multiline-static"
                              label="Recipe Information"
                              name="information"
                              className="input-fuild"
                              multiline
                              rows={3}
                              inputRef={infoRef}
                              placeholder='Enter some information about the recipe'
                            />
                            <div>
                              <label 
                                htmlFor="contained-button-file" className='my-2 mr-3'>Select an Image</label >
                                <FileBase64 
                                    multiple={ false }         
                                    onDone={handleimages}       
                                />
                                {/* <Input 
                                className="border border-black p-2 w-full" name="image" 
                                accept="image/*" 
                                id="contained-button-file" 
                                ref={imageRef}
                                type="file" /> */}
                            </div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Ingredients"
                                name="ingredients"
                                inputRef={ingredientsRef}
                                className="input-fuild my-2"
                                placeholder='Enter the ingredients name'
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Nutrition Facts"
                                name="facts"
                                inputRef={factsRef}
                                className="input-fuild mt-3"
                                multiline
                                rows={3}
                                placeholder='Nutrition Facts'
                            />
                            <TextField onBlur={tagName} className="input-fuild my-3" label="Tags" variant="outlined" />
                            <Button onClick={handleAddTag} className='add-recipe-button' component="span">
                                Add Tag
                            </Button>
                            {!tags?.length < 1 &&
                                <h4 className='my-2'>Added Tags</h4>
                            }
                            {
                                tags.map( tag => (
                                <div style={{ display: "inline-block", border: "1px solid orange", margin: "3px 5px", padding: "1px 7px" }}>
                                    <span>{tag}</span>
                                </div>
                                ))
                            }
                            {/* <TextField
                                id="outlined-multiline-static"
                                label="Additional Details"
                                className="input-fuild mt-3"
                                name="additional"
                                multiline
                                rows={3}
                                placeholder='Additional Details'
                            /> */}
                            <br />
                            <button type='submit' className='my-bg-button my-3'>Add Recipe</button>
                            <button className='my-bg-button ml-3'>Cancel</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </Container>
            </div>
            </div>
        </div>  
     </div>
    )
}

export default AddRecipe
