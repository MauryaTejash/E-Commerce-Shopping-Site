// import React, { useContext } from "react";
// import './CartItem.css'
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from '../Assest/cart_cross_icon.png'
// // import {loadStripe} from '@stripe/stripe-js'

// const CartItem=()=>{
//     const {products} = useContext(ShopContext);
//     const {all_product,removeFromCart,cartItem,getTotalCartAmount} = useContext(ShopContext)

// //     const makePayment = async()=>{
// //         const stripe = await loadStripe("pk_test_51Orz9USJFIdZq1EngQT7HciCYRGG1OFybMJx7SBWhyEUWz33631KKutnTFQ92mvHrdLXHmevgT3PiiVVmZiVI4eH00FEbjh11N");
// //         const body = {
// //             products:cartItem
// //         }
// //         const headers = {
// //             "Content-Type":"application/json"
// //         }
// //         const response = await fetch("http://localhost:7000/createcheckoutsession",{
// //             method:"POST",
// //             // headers:{
// //             //     Accept:'application/json',
// //             //     "Content-Type":"application/json",
// //             // },
// //             headers:headers,
// //             body:JSON.stringify(body),
// //         });
// //         const session = await response.json();

// //         const result = stripe.redirectToCheckout({
// //             sessionId:session.id
// //         });
        
// //         if(result.error){
// //             console.log(result.error);
// //         }
// // }
//     return(
//         <div className="cartitem">
//             <div className="cartitem-main">
//                 <p>Product</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e)=>{

// if(cartItem[e.id]>0)
// {
//   return  <div>
//             <div className="cartitems-format-main cartitems-format">
//               <img className="cartitems-product-icon" src={e.image} alt="" />
//               <p cartitems-product-title>{e.name}</p>
//               <p>${e.new_price}</p>
//               <button className="cartitems-quantity">{cartItem[e.id]}</button>
//               <p>${e.new_price*cartItem[e.id]}</p>
//               <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={remove_icon} alt="" />
//             </div>
//              <hr />
//           </div>;
// }
// return null;
// })}
//             <div className="cartitem-down">
//                 <div className="cartitem-total">
//                     <h1>Cart Total</h1>
//                     <div>
//                         <div className="cartitem-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitem-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitem-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cartitem-prompcode">
//                     <p>If you have Promo code, Please Enter Your Promo Code Here</p>
//                     <div className="cartitem-promobox">
//                         <input type="text" placeholder="Promo Code"/>
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>           
//         </div>
//     )
// }

// export default CartItem



import React, { useContext } from "react";
import './CartItem.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assest/cart_cross_icon.png';
// import { loadStripe } from '@stripe/stripe-js';

const CartItem = () => {
    const { all_product, removeFromCart, cartItems, getTotalCartAmount } = useContext(ShopContext);

    // Debugging logs
    console.log("all_product:", all_product);
    console.log("cartItems:", cartItems);

    // const makePayment = async () => {
    //     const stripe = await loadStripe("your-publishable-key");
    //     const body = {
    //         products: cartItems
    //     };
    //     const headers = {
    //         "Content-Type": "application/json"
    //     };
    //     const response = await fetch("http://localhost:7000/createcheckoutsession", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(body),
    //     });
    //     const session = await response.json();

    //     const result = await stripe.redirectToCheckout({
    //         sessionId: session.id
    //     });

    //     if (result.error) {
    //         console.log(result.error);
    //     }
    // };

    return (
        <div className="cartitem">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (!product || !product.id) {
                    console.error("Invalid product or product ID:", product);
                    return null;
                }
                const quantity = cartItems[product.id] || 0;
                if (quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format-main cartitems-format">
                                <img className="cartitems-product-icon" src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                                <p>${product.new_price.toFixed(2)}</p>
                                <button className="cartitems-quantity">{quantity}</button>
                                <p>${(product.new_price * quantity).toFixed(2)}</p>
                                <img
                                    onClick={() => removeFromCart(product.id)}
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    alt="Remove"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, please enter it here:</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

