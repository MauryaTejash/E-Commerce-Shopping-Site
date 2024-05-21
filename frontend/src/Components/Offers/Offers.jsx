import React from "react";
import './Offers.css'
import exclusive_image from '../Assest/exclusive_image.png'
const Offers=()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for You</h1>
                <p>FOR BEST SELLER PRODUCT</p>
                <button>Check now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>

    )
}

export default Offers