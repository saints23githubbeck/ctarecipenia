import { useEffect, useState } from 'react';

const useSmvideo = () => {
    const [smVideo, setSmVideo] = useState([]);
    useEffect(() => {
        fetch('./smvideo.json')
            .then(res => res.json())
            .then(data => setSmVideo(data))
    }, [])
    return [smVideo];
};

export default useSmvideo;