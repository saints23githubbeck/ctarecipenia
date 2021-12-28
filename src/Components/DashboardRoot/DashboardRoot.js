import React from 'react';

import './DashboardRoot.css'

const DashboardRoot = () => {
    const data = [
        {name:'Administration' , value:12 , color:'red'} ,
         {name:'user', value:200 , color:'blue'} , 
         {name:'Power', value:300, color:'green'},
         {name:'Category' , value:500 , color:'gray'},
         {name:'Administration' , value:12 , color:'red'} ,
         {name:'user', value:200 , color:'blue'} , 
         {name:'Power', value:300, color:'green'},
         {name:'Category' , value:500 , color:'gray'}

        
    ]
    return (
        <div className='flex justify-between '>
        
            <div className='flex-1'>
                <div >
                    <h1 className='text-2xl font-bold bg-red-100 px-2 py-2'>Dashboard</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 relative '>
                    {
                        data.map(ele => <div style={{background:`${ele.color}`}} className=' m-2 dashboard-user bg-red-500 w-48 h-48 flex justify-center items-center flex-col'>
                            <h1>{ele.value}</h1>
                            <h4>{ele.name}</h4>

                        </div>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;