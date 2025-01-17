import React, { useEffect, useState } from "react";
import './Popular.css'
// import data_product from '../Assest/data'
import Item from "../Item/Item";
const Popular=()=>{

    const [popularProduct, setPopularProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((response)=>response.json())
        .then((data)=>setPopularProduct(data));
    },[])

    const [popularProductMen, setPopularProductMen] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/popularinmen')
        .then((response)=>response.json())
        .then((data)=>setPopularProductMen(data));
    },[])

    return(
        <><div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProduct.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                })}
            </div>
        </div>
        <div className="popular">
                <h1>POPULAR IN MEN</h1>
                <hr />
                <div className="popular-item">
                    {popularProductMen.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                    })}
                </div>
            </div></>
    )
}

export default Popular