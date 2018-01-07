import React from 'react';
import Slider from './Slider';
import { SLIDER_CONFIG } from './constants';
import './App.css';

const App = () => {
    return (
        <Slider
            sliderConfig={SLIDER_CONFIG}
            slidesToShow={4}
            speed={1000}
            slidesToScroll={1}
        />
    );
}

export default App;
