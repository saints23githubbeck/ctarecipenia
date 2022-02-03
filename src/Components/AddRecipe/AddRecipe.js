
import { Button, Container, Input, TextField } from "@mui/material"
import React, { useState } from "react"
import "./AddRecipe.css"
import swal from 'sweetalert';

// import altImage from '../../images/image-alt.png'
import Show from "../Shared/Show/Show"

const AddRecipe = () => {
  const [newTag, setNewTag] = useState([])
  const tagName = (e) => {
    const tag = e.target.value
    setNewTag([...newTag, tag])
  }
  const handleAddTag = () => {}
  console.log(newTag)
    

const AddRecipe = ( { open, setOpen } ) => {
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

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append( "image", e.target.image.files[ 0 ] );

        const data = {
            name: e.target.name.value,
            category: e.target.category.value,
            image: e.target.image.files[ 0 ],
            stats: "123",
            information: e.target.information.value,
            facts: e.target.facts.value,
            tags: [ ...tags ],
            additional: e.target.additional.value,
        }

        swal( {
            title: "Please Wait!",
            text: "",
            icon: "info",
        } ).then( () => {

        } 
        )
      }

    return (
      <div>
        <div class="container">     
        <div className='absolute z-50 min-h-screen bg-gray-300 bg-opacity-100 top-0 left-0 right-0' aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className='w-full'>
         <Container>
         <div class="row">
            <div class="col-md-7 mx-auto add-recipe-container">
            <div>
            <form onSubmit={handleSubmit}>
            <TextField className="input-fuild" name="name" label="Recipe Name" variant="outlined" />
            <select name="category" class="form-control my-3 p-3 bg-gray-400">
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
                placeholder='Enter some information about the recipe'
            />
            <div>
                <label htmlFor="contained-button-file" className='my-2 mr-3'>
                    {/* <Button className='add-recipe-button' component="span">
                Select Photo
            </Button> */}
                    Select an Image
                </label >
                <Input className="border border-black p-2 w-full" name="image" accept="image/*" id="contained-button-file" type="file" />
            </div>

            <TextField
                id="outlined-multiline-static"
                label="Ingredients"
                name="ingredients"
                className="input-fuild my-2"
                placeholder='Enter the ingredients name'
            />

            <TextField
                id="outlined-multiline-static"
                label="Nutrition Facts"
                name="facts"
                className="input-fuild mt-3"
                multiline
                rows={3}
                placeholder='lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
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
                ) )
            }
            <TextField
                id="outlined-multiline-static"
                label="Additional Details"
                className="input-fuild mt-3"
                name="additional"
                multiline
                rows={3}
                placeholder='lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
            />
            <button type='submit' className='my-bg-button my-3'>Add Recipe</button>
            <button onClick={() => setOpen( !open )} className='my-bg-button ml-3'>Cancel</button>
            </form>
            </div>
            </div>
         </div>
         </Container>
        </div>
        </div>
     </div>
      <Show></Show>
    </div>
    )
}}

export default AddRecipe
