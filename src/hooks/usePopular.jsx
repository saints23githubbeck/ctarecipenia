import { useState } from 'react';
import { useEffect } from 'react';

const usePopular = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetch('./populardata.json')
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])
    return [popular];
};

export default usePopular;