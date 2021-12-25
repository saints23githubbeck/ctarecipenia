import React from 'react';
import './CategoryList.css';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const AddCategory = () => {
    return (
        <div>
            <div class="container my-5">
                <div className='text-end'>
                    <button className='btn btn-secondary mb-3'>Add New</button>
                </div>
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
                    <div class="col-md-12 ">
                        <div className="table-responsive">
                            <table class="table  table-striped">
                                <thead className='add-category-table text-center text-light'>
                                    <tr>
                                        <th scope="col">Serial</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Time Posted</th>
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
                                            <EditIcon style={{color:"#ff4640"}}/> | <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <EditIcon style={{color:"#ff4640"}}/> | <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <EditIcon style={{color:"#ff4640"}}/> | <DeleteIcon style={{color:"#ff4640"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>lorem Ipsum</td>
                                        <td>
                                            <EditIcon style={{color:"#ff4640"}}/> | <DeleteIcon style={{color:"#ff4640"}}/>
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

export default AddCategory;