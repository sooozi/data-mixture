import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({authenticate, item}) => {
  return (authenticate === true ? <ProductDetail item={item} /> : <Navigate to='/login'/>)
}

export default PrivateRoute
