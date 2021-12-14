import React from 'react';
import Slider from '../Home/Slider/Slider'
import Categories from './Categories/Categories';
import Popular from './Popular/Popular';
import Search from './Search/Search';
import Trending from './Trending/Trending';
import Video from './Video/Video';

const Home = () => {
    return (
        <>
            <Slider />
            <Search />
            <Categories />
            <Popular />
            <Trending />
            <Video />
        </>
    );
};

export default Home;