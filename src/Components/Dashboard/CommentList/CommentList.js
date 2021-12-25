import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import './CommentList.css'
const CommentList = () => {
    return (
        <div>
            <div class="container my-5">
                <h4 className='p-3 blog-title'>Comment List</h4>
                <div className='shadow mt-5 p-5'>
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

                    <div class="row">
                        <div class="col-md-12 blog-thumbnail">
                            <div className="table-responsive">
                                <table class="table table-striped">
                                    <thead className='add-category-table text-center text-light'>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Blog</th>
                                            <th scope="col">Personal Information</th>
                                            <th scope="col">Comment</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Created At</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input mx-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </td>
                                            <td>1 month Ago</td>
                                            <td> 
                                                <DeleteIcon style={{color:"#ff4640"}}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input mx-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </td>
                                            <td>1 month Ago</td>
                                            <td>
                                                <DeleteIcon style={{color:"#ff4640"}}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input mx-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </td>
                                            <td>1 month Ago</td>
                                            <td>
                                                <DeleteIcon style={{color:"#ff4640"}}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>lorem Ipsum</td>
                                            <td>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input mx-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </td>
                                            <td>1 month Ago</td>
                                            <td>
                                                <DeleteIcon style={{color:"#ff4640"}}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentList;