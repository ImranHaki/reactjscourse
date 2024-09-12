import React, {useState} from 'react'
import './Astyle.css'

const Product = (prodprop) => {
    const [products, setProducts] = useState(prodprop.prodList)
  return (
    <div className='style1'>
        <h1>Products</h1>
        <div class="container">
            <div class="row" className='productListDisplay'>
                {products.map((prodList) => {
                    return (
                        <div class="col-sm">
                            <img className='productImgMaxSize' src={prodList.img} alt="products" />
                            <h4>
                                {prodList.name}
                            </h4>
                            <p>
                                {prodList.desc}
                            </p>
                            <h4>
                                {prodList.price}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </div> 
      
    </div>
  )
}

export default Product
