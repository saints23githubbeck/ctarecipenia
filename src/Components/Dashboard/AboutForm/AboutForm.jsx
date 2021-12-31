import React from 'react';
import './AboutForm.css'

function AboutForm() {
    return (
        <div>
            <h1 className='fs-1 Subscribers-heading'>About Us</h1>

            <div className='about-main'>

                <form action="">
                    <h2 className='fw-bold'>Add Title:</h2>
                    <input style={{ border: '2px solid #ACACAC' }} className="form-control" type="text" placeholder='Name Of Recipe' />

                    <h2 className='fw-bold add-content'>Add Content:</h2>
                    <textarea className='' style={{ border: '2px solid #ACACAC' }} name="" id="" cols="30" rows="6"></textarea>

                    <div className='drag mt-5'>
                        <input style={{ border: '2px solid #ACACAC', textAlign: 'center' }} type="text" name="" id="" placeholder='Add your image here' />
                    </div>

                    <button className='select-button mt-5'>Select Photos</button>

                    <h2 className='fw-bold mt-5'>Tags:</h2>
                    <input style={{ border: '2px solid #ACACAC' }} className="form-control" type="text" placeholder='Add Tags Here' />

                    <button className='select-button my-5'>Add Tag</button>

                    <div>
                        <h3 className='fw-bold'>Added Tags:</h3>
                        <div className='all-item'>

                            {Array.from({ length: 6 }).map((_, idx) => (
                                <div className='items'>
                                    <p className='tags me-4 px-3 py-2 text-center'>Lorem</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className='update-button my-5'>Update About Us</button>
                </form>
            </div>
        </div>
    );
}

export default AboutForm;