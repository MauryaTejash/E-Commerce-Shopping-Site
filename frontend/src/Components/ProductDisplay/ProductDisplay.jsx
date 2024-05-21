import React, { useContext} from "react";
import './ProductDisplay.css'
import star_icon from '../Assest/star_icon.png'
import star_dull_icon from '../Assest/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay =(props) =>{

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productdisplay">
            <div className="product-display-left">
                <div className="product-display-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className="productdisplay-main" src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-price">
                    <div className="product-oldprice">
                        ${product.old_price}
                    </div>
                    <div className="product-newprice">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, neque nisi. Accusamus molestias quos quisquam rerum vel ab, totam eius explicabo sequi, veniam fugiat minima excepturi dolore rem nulla cumque.
                </div>
                <div className="product-size">
                    <h1>Select size</h1>
                    <div className="product-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className="product-category">
                    <span>Category: </span>{product.category}, T-Shirt, Crop Top
                </p>
                <p className="product-category">
                    <span>Tag: </span>Modern, latest
                </p>
            </div>
        </div>
    )
}


export default ProductDisplay