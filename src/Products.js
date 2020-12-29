import React from 'react'
import './Products.css'
import { useStateValue } from './StateProvider'
import {motion} from 'framer-motion'

function Products({id,title,image,rating,price,info}) {

  const [{Cart} , push] = useStateValue();

  console.log("CART :  " ,Cart)
  const addToCart = () => {
    //push the item into the data layer
    push({
      type: 'ADD_TO_CART' ,
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
        info:info,
      },
    });
  };

    return (
        <motion.div className="Product"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1, duration:1.5}}
        
        >
          <div className="product-info">
            <p>{title}</p> 
            <p>{info}</p>    
            <p className="product-price">
                <small>₹</small>
                <strong>{price}</strong>
                
            </p>
            <div className="product-rating">
              {Array(rating).fill().map(() =>    
              (
              <p>⭐</p>
              ))}
            </div>
            </div>
            <img className="product-image" src={image}  />
           

           <motion.button 
           whileHover={{
             scale:1.1,
             textShadow:"0px 0px 8px rgb(255,255,255)",
             boxShadow:"0px 0px 8px rgb(255,255,255)",
           }}
           onClick={addToCart}>Add to Cart</motion.button>
        </motion.div>
    )
}

export default Products
