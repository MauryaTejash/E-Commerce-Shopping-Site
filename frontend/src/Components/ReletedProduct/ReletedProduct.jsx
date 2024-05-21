import React from "react";
import './ReletedProduct.css'
import data_product from '../Assest/data'
import Item from "../Item/Item";
const ReletedProduct =() =>{
    return(
        <div className="reletedproduct">
            <h1>Releted Product</h1>
            <hr />
            <div className="reletedproduct-item">
                {data_product.map((item,i) =>{
                    return(
                        <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                    )
                })}
            </div>
        </div>
    )
}

export default ReletedProduct