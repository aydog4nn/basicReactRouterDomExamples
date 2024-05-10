import React from 'react'
import Product from '../components/Product';
import { ProductsData } from '../data/ProductsData';



function Products() {
  return (
    <div>
        {ProductsData && ProductsData.map((product) => (
            <Product product={product} key={product.id} />
        ))}
        <div>Bu siktiğimin kodu calısıyor.</div>
    </div>
  )
}

export default Products