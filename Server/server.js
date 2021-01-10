
const app = require("express") ()
const path = require("path")
const Razorpay=require("razorpay")
const shortid= require('shortid')
require('dotenv').config()
console.log(process.env); 
const cors= require('cors')
const bodyParser= require('body-parser')
app.use(bodyParser.json())

app.use(cors());
//Credentials
const razorpay = new Razorpay({
    key_id: 'rzp_test_cOFU7o9A0jtiZo',
    key_secret: process.env.KEY_SECRET,
  });
//For the Logo

app.get("/Metronics" , (req,res) => {
    res.sendFile(path.join(__dirname, 'MetronicsLogo.gif'))
})


app.post('/verification' , (req,res) =>{

    //do a validation 
    const SECRET='0083'

    console.log(req.body)

    const crypto = require('crypto')

        const shasum = crypto.createHmac('sha256' , SECRET)
        shasum.update(JSON.stringify(req.body))
        const digest = shasum.digest('hex')


        console.log(digest,req.headers['x-razorpay-signature'])

        if(digest===req.headers['x-razorpay-signature']){
            console.log('Request is legit')
            require('fs').writeFileSync('payments.json' , JSON.stringify(req.body,null,4))
        }
        else{
            //pass it 
        }


    res.json({status: 'ok'})
})


app.post('/razorpay' ,async(req,res) => {
   
    console.log("This is it " ,req.body);
    console.log("Required amount  : " , req.body.amount)

    const payment_capture=1;
    const amount=req.body.amount;
    const currency='INR'


const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt:shortid.generate(),
    payment_capture
    }

try {
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
        id:response.id,
        currency:response.currency,
        amount:response.amount
    })


}
catch (error) {
    console.log(error)
            }

})

app.listen(5000, () => {
    console.log('Listening on port 5000 ')
})
