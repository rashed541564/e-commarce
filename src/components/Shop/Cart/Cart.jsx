import React from "react";

const Cart = ({ cart ,clearTheCart}) => {
  let total = 0;
  let quantity = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="p-5 ">
      <h1 className="text-center text-2xl font-semibold mb-6">Order Summary</h1>
      <p className="text-sm text-[#2A414F] my-3">Selected Items: {quantity}</p>
      <p className="text-sm text-[#2A414F] my-3">Total Price: ${total}</p>
      <p className="text-sm text-[#2A414F] my-3">
        Total Shipping Charge: ${shipping}
      </p>
      <p className="text-sm text-[#2A414F] my-3">Tax: ${tax}</p>
      <p className="text-xl text-black my-3 font-semibold mt-5">
        Grand Total: ${grandTotal}
      </p>
      <button onClick={clearTheCart} className="text-white bg-[#FF3030] p-4 w-full rounded-lg mt-12 cursor-pointer">
        Clear Cart
      </button>
      <button className="text-white bg-[#FF9900] p-4 w-full rounded-lg mt-4">
        Review Order
      </button>
    </div>
  );
};

export default Cart;
