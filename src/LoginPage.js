import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './LoginPage.css'
import bglogo from "./metronics.gif";
import {db,auth} from "./Firebase"
import logo from "./MetronicsLogo.gif"

function LoginPage() {

    const history=useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState(''); 


    const SignIn = e => {
        e.preventDefault()
        //Firebase login authentication
        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push("/")
            })

            .catch(err => alert(err.message))
    }


    const Register = e => {
        e.preventDefault();
        //Firebase register

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {

            console.log(auth)
            

            if(auth){
                history.push('/')
            }
        })    

        .catch(err => alert(err.message))
    }


    const Variants = {
        hidden:{
          opacity:0,
        },
        visible:{opacity:1,
          transition: {delay:1.5, duration:1.5}
        },
    
        exit:{
          x:'-100vw',
          transition:{ease:'easeInOut'}
        }
      }
    

    return (
        <div className="Login">
            <Link to = "/">
            <img className="Login-logo" src={logo}   />
            
            </Link>

        <div className="Login-container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={
                    e => setEmail(e.target.value)}
                 />

                <h5>Password</h5>
                <input type="password" value={password} onChange = {
                    e => setPassword(e.target.value)} />

                <button className="Login-SignIn" onClick={SignIn}>Sign In</button>

            </form>

            <label>New  to  Metronics?</label>
          <button className ="Login-Create" onClick={Register}>Create an Account</button>  

        </div>



        </div>
    )
}

export default LoginPage
