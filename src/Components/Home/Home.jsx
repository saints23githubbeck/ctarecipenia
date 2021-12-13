import React from 'react';
import Slider from '../Home/Slider/Slider'
import Categories from './Categories/Categories';
import Search from './Search/Search';

const Home = () => {
    return (
        <>
            <Slider />
            <Search />
            <Categories />
        </>
    );
};

export default Home;