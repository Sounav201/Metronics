import React from 'react'
import "./Checkout_Products.css"
import {useStateValue} from "./StateProvider"
import {motion} from "framer-motion"
function Checkout_Products({id,image,title,price,rating,info}) {


    const [{Cart} , push] = useStateValue();

    const removeFromCart = () =>{
        console.log('CLICKED ME')
        //remove item from Cart
        push( {
            type:'REMOVE_FROM_CART',
            id:id,
        })
        
    }


    console.log("INFO : " ,price)
    return (
        < div className="Checkout-product">
            <img className="Checkout-product-image" src={image} />

            <div className="Checkout-product-info">

                <p className="Checkout-product-title">{title}</p>
                <p>{info}</p>
                <p className="Checkout-product-price">
                    <small>₹</small>
                  <strong>{price}</strong>

                </p>
                <div className="Checkout-product-rating">
                   {Array(rating)
                   .fill()
                   .map(() =>(
                   <p>⭐</p>
                   ))} 

                </div>
                <motion.button
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)",
                  }}
              
                onClick={removeFromCart}>Remove from Cart</motion.button>

            </div>

        </div>
    )
}

export default Checkout_Products
