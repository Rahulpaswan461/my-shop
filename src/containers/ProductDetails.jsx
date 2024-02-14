import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SelectedProduct } from '../redux/actions/ProductActions'
import { removeSelectedProduct } from '../redux/actions/ProductActions'

function ProductDetails(){
      const {productId}=useParams()
       const [loading,setLoading]=useState(true)
       const dispatch=useDispatch()
       const [product,setProduct]=useState({})
       const fetchData=async ()=>{
              axios.get(`https://fakestoreapi.com/products/${productId}`)
              .then(res=>{
                   setLoading(false)
                   setProduct(res.data)
                   dispatch(SelectedProduct(res.data))
              })
              .catch(error=>console.log(error))
       }
       useEffect(()=>{
            fetchData()

            return ()=>{
                 dispatch(removeSelectedProduct()) 
            }
       },[productId])

      return(
         <div>
            {
                  loading ? <h1>...Loading</h1> :
                  <div>
                     <img src={product.image} alt="" />
                     {product.title} $ {product.price}
                  </div>     
            }
         </div>
      )
}
export default ProductDetails