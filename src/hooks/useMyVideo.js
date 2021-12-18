import { useEffect, useState } from 'react';

const useMyvideo = () => {
    const [video, setvideo] = useState([]);
    useEffect(() => {
        fetch('./profileVideo.json')
            .then(res => res.json())
            .then(data => setvideo(data))
    }, [])
    return [video];
};

export default useMyvideo;