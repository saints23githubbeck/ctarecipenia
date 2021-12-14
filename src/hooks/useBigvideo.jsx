import { useEffect } from 'react';
import { useState } from 'react';

const useBigvideo = () => {
    const [bigVideo, setBigVideo] = useState([])
    useEffect(() => {
        fetch('./bigvideo.json')
            .then(res => res.json())
            .then(data => setBigVideo(data))
    }, [])
    return [bigVideo];
};

export default useBigvideo;