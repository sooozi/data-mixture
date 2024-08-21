import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  return (
    <div>
        <h1>전체 상품 페이지</h1>
        <FontAwesomeIcon icon={faHouse} />
        <ProductCard />
    </div>
  )
}

export default ProductAll
