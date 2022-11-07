import React from 'react'
import { CartState } from '../../Context/Context'
import Filter from '../Filter/Filter'
import SingleProduct from '../SingleProduct/SingleProduct'
import "./home.css"

export default function Home() {

  const { state: { products } } = CartState()
  // console.log(products)

  return (
    <div className="home">
      
      {/* Left*****************Filter******************/}
      <Filter />

      {/* Right****************Products*************** */}
      <div className="productContainer">
        {products.map(product => {
          return <SingleProduct key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}
