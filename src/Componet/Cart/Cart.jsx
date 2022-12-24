import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { ADD , DLT , DEC } from "../../Redux/Action";

function Cart() {


    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.reducer.carts);
    const dispatch = useDispatch();
    const addTocart = (e) => {
        //  console.log(e);
        dispatch(ADD(e));
    }
    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const dec = (item) => {
        dispatch(DEC(item));
    }


    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.pric * ele.qtn + price
        });
        setPrice(price);
    };


    useEffect(() => {
        total();
    }, [total])

    return (
        <> {
            getdata.length ?
                <div className="cart-items">
                    <div className="cart-items-header">Cart Items</div>
                    {getdata.map((e) => {
                        return (<>
                            <div key={e.id} className="cart-items-list">
                                <img className="cart-items-image" src={e.images} alt={e.title} />

                                <div className="cart-items-name">
                                    {e.title}
                                </div>
                                <div className="cart-items-function">
                                    <button className="cart-items-add" onClick={() => addTocart(e)}> + </button>
                                    <p>{e.qtn}</p>
                                    <button className="cart-items-remove" onClick={e.qtn <= 1 ? () => dlt(e.id) : () => dec(e)}> - </button>
                                </div>
                                <div className="cart-items-price">
                                    {e.pric * e.qtn}
                                </div>
                                <div className="cart-items-delete">
                                    <button className="cart-items-d" onClick={() => dlt(e.id)}>Delete</button>
                                </div>
                            </div>
                        </>);
                    })

                    }

                    <div className="cart-items-total-price-name">
                        Total :
                        <div className="cart-Items-total-price">
                            ₹{price}
                        </div>
                    </div>

                </div> :
                <div className="cart-items-empty">No Items</div>
        }






        </>
    );
}

export default Cart;
