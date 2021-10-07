import React from "react";
import './errorMesage.css';
import img from './error.jpg';

const errorMesage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;