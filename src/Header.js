import React from 'react'
import './Header.css'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { Link } from 'react-router-dom';
import logo from "./MetronicsLogo.gif"
import { useStateValue } from './StateProvider'
import { auth } from './Firebase';

function Header() {

    const [{Cart,user} , push] = useStateValue();

    const handleAuthentication = () => {
        if (user)
            auth.signOut();

    }


    return (
        
        <div className="header">
           <Link to = "/">
           <img className="header-logo" src={logo} />
           </Link> 
            


        <div className="header-center">
            <input className="header-searchbar" type="text" />
            <SearchSharpIcon className="header-search" />

        </div>
            <div className="header-navbar">
                <Link to = {!user && "/login"}>                
                <div className="header-navbar-element" onClick={handleAuthentication}>
                    <span className="header-element-1">
                        Hello {user? user.email :'Guest'}
                    </span>
                    <span className="header-element-2">
                    {user? 'Sign Out' : 'Sign In'}
                    </span>

                </div>
                </Link>


              
            <Link to ="/checkout">            
            <div className="header-navbar-element-cart">
                <ShoppingCartSharpIcon />
                <span className="header-element-2 header-cartCount">{Cart?.length}</span>
            </div>
            </Link>


            </div>

        </div>
    )
}

export default Header
