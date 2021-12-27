import { Button, Container, Input, TextField } from '@mui/material';
import React, {useState} from 'react';
import './AddBlog.css'
import altImage from '../../../images/alt-image.png'

const AddBlog = () => {
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
            <Container className="my-5">
                <h4 className='bg-secondary p-3 text-light'>Added Blog Post</h4>
                <div class="row">
                    <div class="col-md-7 mx-auto add-recipe-container">
                        <div>
                            <form>
                                <TextField className="input-fuild mb-3" label="Add Title" variant="outlined" />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Add Content"
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
                                <TextField onBlur={tagName} className="input-fuild my-3" label="Tags" variant="outlined" />
                                <Button onClick={handleAddTag} className='add-recipe-button' component="span">
                                    Add Tag
                                </Button>
                                <br />
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
                                <br />
                                <button className='my-bg-button my-3'>Add Recipe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddBlog;