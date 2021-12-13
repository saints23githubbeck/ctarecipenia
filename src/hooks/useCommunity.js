import { useEffect, useState } from 'react';

const useCommunity = () => {
    const [communities,setCommunities]=useState([]);
    useEffect(()=>{
        fetch('./communities.json')
        .then(res=>res.json())
        .then(data=>setCommunities(data))
    },[communities]);
    return {
        communities,setCommunities
    }
};

export default useCommunity;