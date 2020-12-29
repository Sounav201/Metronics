import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./SubTotal.css"
import {useHistory } from "react-router-dom"
import {useStateValue} from "./StateProvider"
import {getTotal} from "./Reducer"
import {motion} from "framer-motion"

function SubTotal() {

    const history = useHistory();
    
    const [{Cart} , push] = useStateValue();


    return (
        <motion.div className="subtotal">
            <CurrencyFormat 
            renderText= {(value) => (
                <>
                <p>
                    Sub-total ({Cart.length} items): <strong>{value}</strong>
                </p>
               
                </>
             ) }
            //decimalScale={0}
            value={getTotal(Cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}

            />
        <motion.button 
        whileHover={{
            scale:1.1,
            textShadow:"0px 0px 8px rgb(255,255,255)",
            boxShadow:"0px 0px 8px rgb(255,255,255)",
          }}
        
        onClick={e => history.push('/payment')}>Go to Checkout</motion.button>
        </motion.div>
    );
}

export default SubTotal
