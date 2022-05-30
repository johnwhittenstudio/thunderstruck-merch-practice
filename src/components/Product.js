import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div class="merch-card">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}.00</div>
      <div>
        <center>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </center>
      </div>
      <hr id="hr"/>
    </div>
  );
}