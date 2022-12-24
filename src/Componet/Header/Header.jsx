import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function Header() {

    const getdata = useSelector((state) => state.reducer.carts);
    // getdata = {getdata};





    return (
        <>
            <header>

                <div className="continue-shopping">
                    <h3>
                        <Link to="/">ShoppingCart.com</Link>
                    </h3>
                    {/* <Link to="/Home">Home</Link> */}
                </div>
                <div className="cart-icon">
                    <Link to="/Cart">
                        <img src="./images/cart.png" alt="cart-logo" />
                        <p
                        >{getdata.length}</p>

                    </Link>

                </div>
            </header>
        </>
    );

};


export default Header;

// 
