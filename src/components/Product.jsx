import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const { id, name, price } = product;
    const navigate = useNavigate();
    return (
        <div>
            <div>Ürün Detayı</div>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <button onClick={() => navigate("/product-details/" + id)}>Detayın git.</button>
        </div>
    );
}

export default Product;
