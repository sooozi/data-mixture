import React from 'react'

const ProductDetail = ({item}) => {
  return (
    <div className="page-productDetail">
      <div className="img-wrap">
        <img src="https://cdn.imweb.me/thumbnail/20230513/d96e82422dd79.png" alt="product image" />
      </div>
        <h1>{item?.title}</h1>
    </div>
  )
}

export default ProductDetail
