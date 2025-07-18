import React, { useState } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";

const Shop = () => {

  const [cart,setCart] = useState([]);
  
  const handleAddToCart =(selectedProduct)=>{
    let newCart = [];
    const exist = cart.find(product => product.id === selectedProduct.id);
    if(!exist){
      selectedProduct.quantity = 1;
      newCart = [...cart,selectedProduct]
    }
    else{
      const rest = cart.filter(product=>product.id != selectedProduct.id);
      exist.quantity = exist.quantity+ 1;
      newCart(...rest,exist)
    }
    setCart(newCart)
  }


  const clearTheCart=()=>{
    setCart([])
  }

  return (
    <div className="mt-23">
      <div className="flex justify-between">
        <div className=" w-4/5">
          <Products handleAddToCart={handleAddToCart}></Products>
        </div>
        <div className="bg-[#FFE0B3] w-1/5 h-[460px] mt-5 fixed right-0 rounded-lg">
         <Cart cart={cart} clearTheCart={clearTheCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
