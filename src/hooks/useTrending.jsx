import { useState, useEffect } from 'react';

const useTrending = () => {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        fetch('./trendingdata.json')
            .then(res => res.json())
            .then(data => setTrending(data))
    }, [])
    return [trending];
};

export default useTrending;