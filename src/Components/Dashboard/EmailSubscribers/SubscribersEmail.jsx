import React from 'react';
import './SubscribersEmail.css'

const SubscribersEmail = () => (
    <div>
        <h1 className='fs-1 Subscribers-heading'>Send Email to Subscribers</h1>

        <div className='Subscribers-from my-5'>
            <div className=''>
                <h5 className='mb-3'>Subject</h5>
                <input className='mb-2' type="text" />
                <hr className='my-3' />
                <h5 className='mb-3'>Content</h5>
                <textarea name="" id="" cols="30" rows="15"></textarea> <br />
                <div className='buttonCustom'>
                    <button className='Subscribers-button mt-3'>Send Email</button>
                </div>
            </div>
        </div>

    </div>
);

export default SubscribersEmail;