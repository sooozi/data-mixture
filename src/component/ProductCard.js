import React from 'react'

const ProductCard = () => {
  return (
    <div className='item-wrap'>
      <img className='item-img' src="https://cdn.imweb.me/thumbnail/20230513/d18e929c5c72c.png" alt="item image" />
      <div className='item-detail'>
        <span className='item-tit'>Pear Paperweight - petite</span>
        <span className='item-price'>38,000</span>
      </div>
    </div>
  )
}

export default ProductCard
