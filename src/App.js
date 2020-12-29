import Header from './Header'
import './App.css';
import HomePage from './HomePage';
import {BrowserRouter as Router, Switch , Route, useLocation} from "react-router-dom";
import Checkout from './Checkout_Page';
import LoginPage from './LoginPage';
import {useEffect} from "react"
import {AnimatePresence} from "framer-motion"
import {auth} from "./Firebase"
import { useStateValue } from './StateProvider';
import PaymentPage from './PaymentPage';
function App() {

  const location = useLocation()
  const [{} , push] = useStateValue();


  useEffect(() => {
      //will only run once when the app component loads

      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>> ' , authUser);

        if (authUser) {
          //user logged in

          push({
            type:'SET_USER',
            user:authUser
          })
        }
        else{
          //user is logged out
          push({
            type:'SET_USER',
            user:null
          })
        }
      })
  }, [])
  return (

    
    <div className="App">
      
      <Switch location={location} key={location.key}>

        <Route path="/login">
          
          <LoginPage/>
        </Route>
      <Route path="/checkout">
            <Header  />    
            <Checkout />      
      </Route>

      <Route path="/payment">
        <Header />
        
        <PaymentPage />
      </Route>

       <Route path="/">
            <Header  />
            <HomePage />
        </Route>
        
        </Switch>  

    </div>
    
  );
}

export default App;
