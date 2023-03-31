import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      });
  }, [id]);

  return (
    <div className="container">
      {product && (
        <div className="card shadow-sm w-75 mx-auto m-5">
          <h1 className="text-center mt-3">{product.title}</h1>
          <img src={product.image} alt={product.title} className="card-img-top" />
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
            <p className="card-text">{product.description}</p>
            <p className=" fs-1 text-center bg-success rounded-pill">${product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
