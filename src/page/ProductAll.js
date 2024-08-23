import React, { useCallback, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  let [productList, setProductList] = useState([]);
  // const [query, setQuery] = useSearchParams();
  const [query] = useSearchParams();  // 쿼리 파라미터를 읽기만 함

  //useCallback 사용: getProducts 함수를 useCallback으로 메모이제이션하여 의존성 배열에 추가할 수 있습니다
  const getProducts = useCallback(async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/sooozi/data-mixture/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }, [query]);  // query 객체가 변경될 때마다 호출됨

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // console.log(setQuery);
  // const getProducts = async() => {
  //   let searchQuery = query.get("q") || "";
  //   let url =`https://my-json-server.typicode.com/sooozi/data-mixture/products?q=${searchQuery}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProductList(data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, [query] );

  return (
    <div className="page-productAll">
      <Container>
        <Row>
          {productList.map((item )=> (
            <Col lg={3} key={item.id} className='col-lg-3'>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
