import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from '../Banner/Banner'
import Homecategory from '../Category/Homecategory'
import ProductSidebar from '../Products/ProductSidebar'
import Footer1 from './Footer/Footer1'
import Footer2 from './Footer/Footer2'

const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Banner/>
      <Homecategory/>
      <ProductSidebar/>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Home
