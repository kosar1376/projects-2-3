import React, { useState } from "react";
import Product from "./Product";
import "./Product.css";


const Products = ({data}) => {


  return (
    <div className="products-container">
      {data.map((item) => (
        <Product
          key={item.id}
          img={item.image}
          price={item.price}
          id={item.id}
          data={data}
        />
      ))}
    </div>
  );
};

export default Products;
