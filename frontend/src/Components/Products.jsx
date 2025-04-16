import React, { useState } from 'react'
import Items from "./ItemBox"
import { useEffect } from 'react'


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }, [])

  return (
    <div className='flex flex-wrap justify-between py-8 gap-15'>
        {products.map((product) => {
            return <Items key={product.id} {...product}/>
        })}
    </div>
  )
}

export default Products