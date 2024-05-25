import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../ASSAT/1.png';
import img2 from '../../ASSAT/2.png';
import img3 from '../../ASSAT/3.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Productspages.css'

const Productspages = () => {
    const { prodid } = useParams();
    const [imagelist, setimagelist] = useState([]);
    const [productdata, setproductdata] = useState({});
    const [activeimage, setactiveimage] = useState('');
     const[count,setcount]=useState(1)
    const getproductbyid = async () => {
        let temp = {
            "code": 200,
            "message": "success",
            "Data": [
                {
                    "ProductId": 1,
                    "ProductName": "Product 1",
                    "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
                    "ProductImage": [
                        { id: 1, image: img1 },
                        { id: 2, image: img2 },
                        { id: 3, image: img3 }
                    ],
                    "ProductCode": "P1",
                    "ProductCategory": "Category 1",
                    "ProductSubCategory": "Sub Category 1",
                    "ProductBrand": "Brand 1",
                    "ProductColor": "Color 1",
                    "ProductSize": "Size 1",
                    "ProductWeight": "Weight 1",
                    "ProductMaterial": "Material 1",
                    "ProductQuantity": 10,
                    "ProductUnit": "Unit 1",
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductDiscountType": "Percentage",
                    "ProductTax": 20,
                    "ProductTaxType": "Percentage",
                    "ProductShippingCharge": 20,
                    "ProductShippingChargeType": "Percentage",
                    "ProductShippingTime": "1-2 days",
                    "ProductShippingTimeType": "Days",
                    "ProductShippingLocation": "Location 1",
                    "ProductShippingLocationType": "Country",
                    "ProductShippingReturnPolicy": "Return Policy 1",
                    "ProductShippingReturnPolicyType": "Days",
                    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                    "ProductShippingReturnPolicyDescriptionType": "Days",
                    "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Harshal Jain",
                            "Email": "",
                            "Rating": 5,
                            "Date": "2021-08-01",
                            "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Viraj",
                            "Email": "",
                            "Rating": 1,
                            "Date": "2021-08-01",
                            "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                        },
                        {
                            "ReviewId": 3,
                            "Name": "Harshal Jain",
                            "Email": "",
                            "Rating": 4,
                            "Date": "2021-08-01",
                            "Review": "It has survived not only five centuries..."
                        }
                    ]
                }
            ]
        };

        if (temp.code === 200) {
            const product = temp.Data.find(item => item.ProductId.toString() === prodid);
            if (product) {
                setimagelist(product.ProductImage);
                setproductdata(product);
                setactiveimage(product.ProductImage[0]?.image || '');
            }
        }
    };

    useEffect(() => {
        getproductbyid();
    }, [prodid]);

    return (
        
        <div className='productpages'>
        <Navbar />

        <div className='pc1'>
          
            <div className='pc1'>
                <Link to='/'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                        Go Back
                    </button>
                </Link>
            </div>
            <div className='cl1'>
                <div className='imgset'>
                    {imagelist.map(img => (
                        <img
                            key={img.id}
                            src={img.image}
                            alt={`Product Image ${img.id}`}
                            onClick={() => setactiveimage(img.image)}
                            style={{ width: '100px', cursor: 'pointer' }}
                        />
                    ))}
                </div>
                <div className='imgbig'>
                    <img src={activeimage} alt="Active" style={{ width: '300px' }} />
                </div>
            </div>
            <div className='cl2'>
                <h1 className='head1'>{productdata.ProductName}</h1>
                <p>{productdata.ProductDescription}</p>
                {/* Add more product details as needed */}
            </div>

            <div className='c121'>
            <p className='price'>
            ${productdata.SalesPrice *count}
            <span>${productdata.ProductPrice*count}</span>
            </p>
            </div>

            <div className='addcontainer'>
            <button
            onClick={()=>{
                if(count>1){
                    setcount(count-1)
                }
            }}
            
            >-</button>

            <p>{count}</p>

            <button
            onClick={()=>{
                if(count<10){
                    setcount(count+1)
                }
            }}
            
            >+</button>

            <div className='btn1'>
            <button
            onClick={()=>{
                alert('add to card')
            }}
            
            >Add to card</button>


            <button

            onClick={()=>{
                alert('buy now')
            }}
            
            
            
            >Buy Now</button>
            
            </div>


            
            </div>
            </div>
        </div>
    );
};

export default Productspages;
