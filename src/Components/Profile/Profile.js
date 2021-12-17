import React from 'react';
import './Profile.css'

const Profile = () => {
   
    return (
        <div className='px-2'>
            <div>
                <h1 className='text-3xl font-bold bg-red-100 px-2 py-3'>Profile</h1>
            </div>
            <div className='grid grid-cols-2 space-x-5'>
               <div>
                   <p className='text-2xl font-semibold '>First Name:</p>
                   <input type='text' name='name' id ='name' className="border-2 px-5 py-2 w-full"/>
               </div>
               <div>
                   <p className='text-2xl font-semibold '>Last Name:</p>
                   <input type='text' name='name' id ='name' className="border-2 px-5 py-2 w-full"/>
               </div>
            </div>
            <div className='grid grid-cols-2 space-x-5'>
               <div>
                   <p className='text-2xl font-semibold '>UserName:</p>
                   <input type='text' name='name' id ='name' className="border-2 px-5 py-2 w-full"/>
               </div>
               <div>
                   <p className='text-2xl font-semibold '>Email on profile:</p>
                   <input type='text' name='name' id ='name' className="border-2 px-5 py-2 w-full"/>
               </div>
            </div>
            <div className='grid grid-cols-2 space-x-5'>
               <div>
                   <p className='text-2xl font-semibold '>Country</p>
                   <input type='text' name='name' id ='name' className="border-2 px-5 py-2 w-full"/>
               </div>
               <div>
                   <p className='text-2xl font-semibold '>Password</p>
                   <input type='password' name='name' id ='name' className="border-2 px-5 py-2 w-full"/>
               </div>
            </div>
            <div>
                <p className='text-2xl font-semibold '>Description</p>
                <input type="text-area" name="" value="" className='w-full h-64 border-2'/>
            </div>
            <div>
                <div className='flex justify-left space-x-5 my-2'>
                    <div>
                        <input type="radio" id="male" name="drone" value="male" checked/>
                        <label  className='font-semibold text-2xl ' for="male">Male</label>
                    </div>

                    <div>
                        <input type="radio"  id="female" name="drone" value="female"/>
                        <label for="female" className='font-semibold text-2xl '>Female</label>
                    </div>
                </div>
                <div>
                    <div className='text-right'>
                        <input type='file' class="custom-file-input"/>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Profile;