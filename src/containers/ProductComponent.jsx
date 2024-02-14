import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ProductComponent.css'

function ProductComponent(){
    const product=useSelector(state=>state.allProduct.product)

    const renderList=product.map(products=>{
     const {id,title,image,price,category,desc}=products
       return(
           <div className="card__list" key={id}>
               <Link to={`product/${id}`} style={{textDecoration:"none"}} >
                      <div className="cards">
                          <div className="image">
                              <img src={image} alt="" />
                          </div>
                          <div className="content__section">
                                 <div className="product__title">{title}</div>
                                 <div className="product__price">${price}</div>
                          </div>
                      </div>
               </Link>

           </div>
       )
    })
       return(
            <>{renderList}</>
       )
}
export default ProductComponent