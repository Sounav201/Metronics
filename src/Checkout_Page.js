import React from 'react'
import "./Checkout_Page.css"
import Checkout_Products from './Checkout_Products';
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'
import FlipMove from "react-flip-move";
import banner from "./Checkout_Banner.jpg"  

function Checkout() {
    const [{Cart,user}, push] = useStateValue();


    return (
        <div className="Checkout">
             <div className="Checkout-left">
                <img className="Checkout-ad" src={banner} /> 
        

        <div>
            <h3>Hello there {user? user.email :'Guest'} 😄</h3>
            <h2 className="Checkout-title">
                Your Shopping Cart 
                
            </h2>

            <FlipMove>
            {Cart.map (item => (
                <li className='liststyle'>
                <Checkout_Products
                
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                

                />
                </li>
            ))}
            </FlipMove>

        </div>
        </div>
    <div className="Checkout-right">
             <SubTotal />
               

        
        </div>   
    </div>
    )
}

export default Checkout
