import React from 'react';
// import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const ProductDetailPage = () => {
    // const {id} = useParams();
    const [query, setQuery] = useSearchParams();
    // console.log("params", id);
    console.log(query.get("q"));

    return (
        <div>
            show product detail
        </div>
    )
}

export default ProductDetailPage
