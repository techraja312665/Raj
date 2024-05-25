import React from 'react'
import ProductCard  from './ProductCard'
import img4 from '../../components/ASSAT/Images/4.png'
import img2 from '../../components/ASSAT/2.png'
import img3 from '../../components/ASSAT/3.png'
import img1 from '../ASSAT/1.png'
import './Allproduct.css'


const Allproducts = () => {

    const products=[
        {
            id:1,
            Image:img1,
            productname:'Product 1',
            Productprice:300,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:2,
            Image:img2,
            productname:'Product 2',
            Productprice:800,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:3,
            Image:img3,
            productname:'Product 3',
            Productprice:600,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:4,
            Image:img4,
            productname:'Product 4',
            Productprice:300,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:1,
            Image:img1,
            productname:'Product 6',
            Productprice:400,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:7,
            Image:img2,
            productname:'Product 7',
            Productprice:500,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:7,
            Image:img2,
            productname:'Product 7',
            Productprice:500,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:7,
            Image:img2,
            productname:'Product 7',
            Productprice:500,
            counttype:'1 per kg',
            discount:10


        
        },
        {
            id:7,
            Image:img4,
            productname:'Product 7',
            Productprice:500,
            counttype:'1 per kg',
            discount:10


        
        },
    ]


  return (
    <div className='All_product'>
    <h1>All Products</h1>
    <div className='products'>

    {
        products.map((item)=>{
            return(
                
                
                <ProductCard data={item} key={item.id}/>
                
                
            )
        })
    }
    </div>
    
      
    </div>
  )
}

export default Allproducts
