import React from 'react';
import './Main.css'
import ImgBox from './ImgBox';
import Details from './Details';

function Product(props) {
    return (
        <div className="container">
            <ImgBox />
            <Details />
        </div>
    );
}

export default Product;