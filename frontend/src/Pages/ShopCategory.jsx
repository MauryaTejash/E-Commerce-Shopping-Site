import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assest/dropdown_icon.png'
import Item from "../Components/Item/Item";

const ShopCategory =(props) =>{

    const {all_product} = useContext(ShopContext);
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-index">
                <p>
                    <span>Showing 1-12</span> out of 36 Product
                </p>
                <div className="shopcategory-short">
                    Sort by<img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-product">
                {all_product.map((item,i)=>{
                    if(props.category === item.category){
                        return(
                            <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>

    )
}
export default ShopCategory