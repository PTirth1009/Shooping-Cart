import React from "react";
import { useDispatch } from "react-redux";
import "./card.css";
import { ADD } from "../../Redux/Action";

const Card = (props) => {
  const dispatch = useDispatch();

  const addTocart = (e) => {
    //  console.log(e);
    dispatch(ADD(e));
  }

  return (<>
    <div className="Product">
      <div className="card">
        <div>
          <img className="product-image" src={props.images} alt={props.title} />
        </div>
        <div>
          <h3 className="product-name">{props.title}</h3>
        </div>
        <div className="product-price">
        ₹{props.pric}
        </div>
        <div>
          <button className="prdouct-add" onClick={() => addTocart(props)}>Add to Cart</button>
        </div>

      </div>
    </div>
  </>)
}

export default Card;