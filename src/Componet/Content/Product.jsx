import React, { useState } from "react";
import { data } from "./Data";
import Card from "./Card";
import "./card.css";


const Product = () => {

    const [item, setitem] = useState(data);


    return (<>

        <div className="products">
            {item.map((productsItem) => {
                return (

                    <Card
                        id={productsItem.id}
                        key={productsItem.id}
                        qtn={productsItem.quantity}
                        images={productsItem.img}
                        title={productsItem.title}
                        desc={productsItem.description}
                        pric={productsItem.price} />


                );
            }

            )}
        </div>
    </>)
};
export default Product;



