import React from 'react'
import Items from "./ItemBox"
import data from "../assets/Data/ProductData.json"

const Products = () => {
  return (
    <div className='flex flex-wrap justify-between py-8 gap-15'>
        {data.map((item) => {
            return <Items key={item.id} {...item}/>
        })}
    </div>
  )
}

export default Products