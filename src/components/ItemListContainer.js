import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import './ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url += `/category/${category}`;
    }
    axios.get(url)
      .then(response => {
        setProducts(response.data);
      });
  }, [category]);

  return (
    <div className="container">
      <h1 className="h3 mb-3 fw-normal text-center m-3">{category ? category.toUpperCase() : 'BIENVENIDO A NUESTRO CATALOGO'}</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm sddd">
              <img src={product.image} alt={product.title} className="card-img-top custom-img" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                <p className="card-text">{product.description}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary" style={{fontSize: 'small'}}>Ver Precio</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
