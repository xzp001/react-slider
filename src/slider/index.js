import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
let imgData = [
    {src: require('../images/1.jpg')},
    {src: require('../images/2.jpg')},
    {src: require('../images/3.jpg')},
    {src: require('../images/4.jpg')},
];


ReactDOM.render(
    <Slider
        item={imgData}
        auto={true}
        delay={1.8}
        speed={1.2}
    />, document.getElementById('root'));


