import React from 'react'
import CategorySidebar from './CategorySidebar'
import Allproducts from './Allproducts'
import './ProductSidebar.css'

const ProductSidebar = () => {
  return (
    <div className='product_sidebar'>
      <CategorySidebar/>
      <Allproducts/>
    </div>
  )
}

export default ProductSidebar
