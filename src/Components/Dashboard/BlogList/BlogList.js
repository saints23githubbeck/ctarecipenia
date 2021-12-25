import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './BlogList.css'
const BlogList = () => {
    return (
        <div>
            <div class="container my-5">
                <div className='text-end'>
                    <button className='btn btn-secondary mb-3'>Add New</button>
                </div>
                <div class="row">
                    <div class="row">
                        <div class="flexible-add-category">
                            <div>
                                <span>Show</span>
                                <select name="cars" id="cars" className='mx-2'>
                                    <option value="volvo">10</option>
                                    <option value="saab">20</option>
                                    <option value="opel">30</option>
                                    <option value="audi">40</option>
                                </select>
                                <span >Entries</span>
                            </div>
                            <div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">
                                        <SearchIcon />
                                    </span>
                                    <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 blog-thumbnail">
                        <div className="table-responsive">
                            <table class="table  table-striped">
                                <thead className='add-category-table text-center text-light'>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Thumbnail</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <img src="https://previews.123rf.com/images/krimkate/krimkate1908/krimkate190800024/129017535-food-square-background-top-view-of-various-fresh-vegetables-on-wooden-table.jpg" alt="" />
                                        </td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <RemoveRedEyeIcon style={{color:"#ff4640"}}/>
                                            <EditIcon style={{color:"#ff4640"}}/> 
                                            <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <img src="https://previews.123rf.com/images/krimkate/krimkate1908/krimkate190800024/129017535-food-square-background-top-view-of-various-fresh-vegetables-on-wooden-table.jpg" alt="" />
                                        </td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <RemoveRedEyeIcon style={{color:"#ff4640"}}/>
                                            <EditIcon style={{color:"#ff4640"}}/> <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <img src="https://previews.123rf.com/images/krimkate/krimkate1908/krimkate190800024/129017535-food-square-background-top-view-of-various-fresh-vegetables-on-wooden-table.jpg" alt="" />
                                        </td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <RemoveRedEyeIcon style={{color:"#ff4640"}}/>
                                            <EditIcon style={{color:"#ff4640"}}/> <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <img src="https://previews.123rf.com/images/krimkate/krimkate1908/krimkate190800024/129017535-food-square-background-top-view-of-various-fresh-vegetables-on-wooden-table.jpg" alt="" />
                                        </td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <RemoveRedEyeIcon style={{color:"#ff4640"}}/>
                                            <EditIcon style={{color:"#ff4640"}}/> <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;