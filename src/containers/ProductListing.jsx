import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProduct} from '../redux/actions/ProductActions';
import './ProductList.css'

function ProductListing(){
    const products=useSelector((state)=>state);
     const dispatch=useDispatch()
     console.log("The dat from the store",products)
     const fetchProducts= async ()=>{
        const response= await axios.get('https://fakestoreapi.com/products')
        .catch(error=>console.log(error))
        dispatch(setProduct(response.data))
     }
    
     useEffect(()=>{
       fetchProducts()
     },[])
     return(
       <div className="container">
          <ProductComponent/>
       </div>
     )
}
export default ProductListing