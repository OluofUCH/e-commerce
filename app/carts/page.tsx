import React from 'react'

async function Cart() {
    const data = await fetch('https://fakestoreapi.com/carts')
    const carts = await data.json();
  return (
    <div>Cart</div> 
    {carts.map((cart: any) => ( 
      <div key={cart.id} className="p-4 border rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2">Cart ID: {cart.id}</h2>
        <ul className="list-disc pl-5">
          {cart.products.map((product: any) => (
            <li key={product.productId} className="mb-1">
              Product ID: {product.productId}, Quantity: {product.quantity}
            </li>
    ))}
        </ul>
        <p className="mt-2 text-gray-600">Total Price: ${cart.total.toFixed(2)}</p> 
    </div>
    ))}

  );
}               
export default Cart