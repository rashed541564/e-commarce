import React from "react";
import searching from "../../../assets/images/orange_circles.gif";

const Product = ({ product,handleAddToCart }) => {
  const { name, seller, price, img, ratings } = product;

  return (
    <div className="card bg-base-100  border-1 border-gray-400 w-75 ">
      <img
        className="rounded-2xl p-2 h-71"
        src={img}
        // alt="Product Image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = searching;
        }}
      />
      <div className="card-body p-4  ">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">Price: {price}</p>
        <p className="">Manufacturer: {seller}</p>
        <p className="">Rating: {ratings} Star</p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className="bg-orange-200 text-black py-3 font-semibold rounded-b-lg cursor-pointer hover:bg-orange-400">Add To Cart</button>
    </div>
  );
};

export default Product;
