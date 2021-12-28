import React from 'react';
import './AddAdvertisement.css'

const AddAdvertisement = () => {
    return (
        <div>
            <h1 className='fs-1 Subscribers-heading'> Add Advertiesment</h1>

            <div className='my-5 addAdvertiesment'>

                <form action="">
                    <div className=''>

                        <div className="row g-3 align-items-center">
                            {/* From location */}
                            <div className="col-md-2 col-lg-1">
                                <label for="" className="col-form-label fw-bold">Locations</label>
                            </div>
                            <div className='col-md-10 col-lg-11'>
                                <select style={{ border: '2px solid gray' }} className="form-select">
                                    <option selected></option>
                                    <option value="1">ali</option>
                                    <option value="2">Shorif</option>
                                    <option value="3">Bangladesh</option>
                                    <option value="3">01796491068</option>
                                </select>
                            </div>
                            <span className='mb-3'>
                                <hr />
                            </span>

                            {/* title */}
                            <div className="col-md-2 col-lg-1 text-md-end">
                                <label for="" className="col-form-label fw-bold ">Title</label>
                            </div>
                            <div className='col-md-10 col-lg-11'>
                                <input style={{ border: '2px solid gray' }} className="form-control" type="text" />
                            </div>
                            <span className='mb-3'>
                                <hr />
                            </span>

                            {/* type of  */}
                            <div className='d-flex mb-2'>
                                <div className="col-md-2 col-lg-1 text-md-end">
                                    <label className="col-form-label fw-bold ">Type</label>
                                </div>
                                <div className='col-md-10 col-lg-11'>
                                    <div className="form-check">
                                        <input className="mx-3 fs-2 form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="" />
                                        <label className="form-check-label mx-3 fs-4 mt-1" for="exampleRadios1">
                                            Image
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='d-md-flex justify-content-end mb-3'>
                                <div className="col-md-1 text-md-end me-3">
                                    <label for="" className="col-form-label fw-bold ">Image URL</label>
                                </div>
                                <div className='col-md-9'>
                                    <input style={{ border: '2px solid gray' }} className="form-control" type="text" />
                                </div>
                            </div>

                            <div className='d-md-flex justify-content-end'>
                                <div className="col-md-2 text-md-end me-3">
                                    <label for="" className="col-form-label fw-bold ">Upload Image</label>
                                </div>
                                <div className='col-md-9'>
                                    <input style={{ border: '2px solid gray' }} className="form-control" type="text" />
                                </div>
                            </div>

                            <div className='col-11 col-md-7 mt-3 m-auto'>
                                <div className="form-check">
                                    <input className="mx-3 fs-2 form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="" />
                                    <label className="form-check-label mx-3 fw-bold mt-2" for="exampleRadios1">
                                        Code
                                    </label>
                                </div>
                            </div>

                            <div>
                                <div className='d-md-flex justify-content-end'>
                                    <div className='col col-md-2'>

                                    </div>
                                    <div className='col col-md-9 my-2'>
                                        <textarea className='w-100' style={{ border: '2px solid gray' }} name="" id="" cols="30" rows="10"></textarea>
                                        <br />
                                        <div className='d-flex my-3'>
                                            <button className='button1 me-3'>Save</button>
                                            <button className='button2'>Cancel</button>
                                        </div>

                                    </div>

                                </div>
                            </div>










                        </div>
                    </div>


                </form>
            </div>

        </div>
    );
};

export default AddAdvertisement;