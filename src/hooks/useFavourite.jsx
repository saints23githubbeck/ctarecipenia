import { useEffect, useState } from 'react';

const useFavourite = () => {
    const [favrouite, setFavrouite] = useState([]);
    useEffect(() => {
        fetch('./favourite.json')
            .then(res => res.json())
            .then(data => setFavrouite(data))
    }, [])
    return [favrouite];
};

export default useFavourite;