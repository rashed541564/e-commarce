import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({handleAddToCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="py-5 p-4 lg:px-6 ">
    
     <div className="grid grid-cols-3 gap-5">
         {products.map((product) => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
      ))}
     </div>
    </div>
  );
};

export default Products;
