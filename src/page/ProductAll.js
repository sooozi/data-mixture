import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  let [productList, setProductList] = useState([]);
  const getProducts = async() => {
    let url =`http://localhost:3000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="page-productAll">
      <Container>
        <Row>
          {productList.map((item )=> (
            <Col lg={3}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
