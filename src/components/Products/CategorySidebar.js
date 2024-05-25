import React from 'react'
import img4 from '../../components/ASSAT/Images/4.png'
import img2 from '../../components/ASSAT/2.png'
import img3 from '../../components/ASSAT/3.png'
import img1 from '../ASSAT/1.png'
import './Categorysidebar.css'


const CategorySidebar = () => {

    const data=[
        {
            id:1,
            Image:img1,
            Name:'categoryname'

        },
        {
            id:2,
            Image:img2,
            Name:'categoryname'

        },
        {
            id:3,
            Image:img3,
            Name:'categoryname'

        },
        {
            id:4,
            Image:img4,
            Name:'categoryname'

        },
        {
            id:5,
            Image:img1,
            Name:'categoryname'

        },
        {
            id:6,
            Image:img2,
            Name:'categoryname'

        },]
  return (
    <div className='categorysidebar'>

    {
      data.map((item)=>{
        return(
            <div className='category'>
            <img src={item.Image} alt='categoryimage'/>
            <h3>{item.Name}</h3>
            </div>
        )
      })
    }
      
    </div>
  )
}

export default CategorySidebar
