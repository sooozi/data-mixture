import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='item-wrap'>
      <img className='item-img' src={item?.img} alt="item image" />
      <img className='item-hover' src={item?.hover} alt="item hover image" />
      <div className='item-detail'>
        <span className='item-tit'>{item?.title}</span>
        <span className='item-price'>￦{item?.price.toLocaleString()}</span>
        <div className='icon-wrap'>
          <div className='icon-new'>{item.new == true? <img width={48} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/75e1a0648703f.png" alt="new icon" /> : ""}</div>
          <div className='icon-hot'>{item.hot == true? <img width={48} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/1325bfe4d77a6.png" alt="hot icon" /> : ""}</div>
          <div className='icon-choice'>{item.choice == true? <img width={48} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/acedcf9400bb7.png" alt="choice icon" /> : ""}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
