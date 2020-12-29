import React from 'react'
import Checkout_Products from './Checkout_Products';
import CurrencyFormat from "react-currency-format";
import {getTotal} from "./Reducer";
import "./PaymentPage.css"
import {useState} from "react"
import FlipMove from "react-flip-move";
import {Link , useHistory } from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import { db } from './Firebase';



function loadRazorPay(src){

    return new Promise(resolve => {
        const script= document.createElement('script')

        script.src=src
    
       
        script.onload= () =>{
            resolve(true)
        }
       script.onerror = () => {
           resolve(false)
       }
       document.body.appendChild(script)
    })
    
       
}



function PaymentPage() {
    const [{Cart,user}, push] = useStateValue();
    const history = useHistory()
    let total=getTotal(Cart);
    console.log("Current Amount is : " , total)


    const [name, setName] = useState('Sounav')

  async  function showRazorPay(){

        const res= await loadRazorPay("https://checkout.razorpay.com/v1/checkout.js")

        if(!res)
           { alert('RazorPay SDK failed to load. Please check your internet connection. ')
            return 
           }
        
        const data= await fetch('http://localhost:5000/razorpay' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }, 
            body:JSON.stringify({
            amount: total      })})
            .then(res =>  res.json()
            )
            
            console.log("ME DATA : ",data)
           
        const options = {
            key: 'rzp_test_cOFU7o9A0jtiZo', // Enter the Key ID generated from the Dashboard
            currency: data.currency,
            amount: `${data.amount}`,
            order_id: data.id,
            name: "Metronics",
            description: "Your Payments",
            image: "http://localhost:5000/Metronics",
//            "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                name
                
                
            }
                        
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        //IF Payment is successful
        
        

        push({
            type:'EMPTY_CART'
        })
        history.replace('/orders')
    }

    //Key id : rzp_test_cOFU7o9A0jtiZo
    //Key secret: WDrNVCSxOAjiqkdnOD5fvFBH

   


    return (
        <div className="Payment">
            <div className="Payment-Container">

            <h1>Checkout ( <Link to= "/checkout">{Cart?.length} items </Link>)  </h1>

                



                <div className="Payment-Section">
                <div className="Payment-Title">
                        <h3>Review Items</h3>

                    </div>
                    <div className="Payment-items">
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



                <div className="Payment-Section">
                <div className="Payment-Title">
                        <h3>Payment Methods</h3>

                        <div className="Payment-Details">

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

                            <button className="Payment-btn" onClick={showRazorPay}  >Proceed to Pay</button>

                        </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default PaymentPage
