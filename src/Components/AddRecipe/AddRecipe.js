import { Button, Container, Input, TextField } from '@mui/material';
import React, {useState} from 'react';
import './AddRecipe.css'
import altImage from '../../images/image-alt.png'
import Show from '../Shared/Show/Show';


const AddRecipe = () => {
    const [newTag,setNewTag] =useState([]);
    const tagName = (e)=>{
        const tag= e.target.value;
        setNewTag([...newTag,tag]);
    }
    const handleAddTag =()=>{
    }
    console.log(newTag);
    return (
        <div>
            <Container>
                <div class="row">
                    <div class="col-md-7 mx-auto add-recipe-container">
                        <div>
                            <form>
                                <TextField className="input-fuild" label="Recipe Name" variant="outlined" />
                                <select class="form-control my-3 p-3">
                                    <option>Choose Category</option>
                                </select>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Recipe Information"
                                    className="input-fuild"
                                    multiline
                                    rows={3}
                                    placeholder='lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                                />
                                <img className='img-fluid mt-3' src={altImage} alt="" />
                                <label htmlFor="contained-button-file" className='my-2'>
                                    <Input style={{display:"none"}} accept="image/*" id="contained-button-file" multiple type="file" />
                                    <Button className='add-recipe-button' component="span">
                                        Select Photo
                                    </Button>
                                </label>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Ingredients"
                                    className="input-fuild my-2"
                                    placeholder='Jhon Doi'
                                />
                                <Button className='add-recipe-button' component="span">
                                    Add Ingredients
                                </Button>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Nutrition Facts"
                                    className="input-fuild mt-3"
                                    multiline
                                    rows={3}
                                    placeholder='lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                                />
                                <TextField onBlur={tagName} className="input-fuild my-3" label="Tags" variant="outlined" />
                                <Button onClick={handleAddTag} className='add-recipe-button' component="span">
                                    Add Tag
                                </Button>
                                {!newTag?.length < 1 &&
                                    <h4 className='my-2'>Added Tags</h4>
                                }
                                {
                                    newTag.map(tag=> (
                                        <div style={{display:"inline-block", border:"1px solid orange", margin:"3px 5px", padding:"1px 7px"}}>
                                            <span>{tag}</span>
                                        </div>
                                    ))
                                }
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Additional Details"
                                    className="input-fuild mt-3"
                                    multiline
                                    rows={3}
                                    placeholder='lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                                />
                                <button className='my-bg-button my-3'>Add Recipe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            <Show></Show>
        </div>
    );
};

export default AddRecipe;