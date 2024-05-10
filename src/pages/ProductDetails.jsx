import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/ProductsData";
import Product from "../components/Product";

function ProductDetails() {
    const { id } = useParams();

    return (
        <div>
            <div>
                <h1>Ürün Detayları</h1>
                <hr />
                {ProductsData &&
                    ProductsData.map((product) => {
                        if (product.id === id) {
                            return <Product product={product} />;
                        }
                    })}
            </div>
        </div>
    );
}

export default ProductDetails;
