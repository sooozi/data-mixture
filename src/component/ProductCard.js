import React from 'react'

const ProductCard = () => {
  return (
    <div className='item-wrap'>
      <img className='item-img' src="https://cdn.imweb.me/thumbnail/20230513/d18e929c5c72c.png" alt="item image" />
      <div className='item-detail'>
        <span className='item-tit'>Pear Paperweight - petite</span>
        <span className='item-price'>38,000</span>
        <div className='icon-wrap'>
          <img className='icon-new' width={48} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/75e1a0648703f.png" alt="new icon" />
          <img className='icon-hot' width={48} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/1325bfe4d77a6.png" alt="hot icon" />
          <img className='icon-choice' width={48} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/acedcf9400bb7.png" alt="pick icon" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
