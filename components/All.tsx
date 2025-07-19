import React from 'react'
import ProductCard from './productCard';
import fetchedProducts from '../lib/products';

async function AllCategory() {

  const fetchedProduct = await fetchedProducts();
  if (!fetchedProduct || fetchedProduct.length === 0) {
    return <div className="text-center text-gray-500">No products available</div>;
  }
  const log=()=>{
    console.log("first")
  }
  return (
    <div className='pt-[4rem] px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900'>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">All Products</h1>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">Explore our amazing collection of products</p>
            </div>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
                {fetchedProduct.map((product: Card) => (
                  // <div key={product.id} className="">
                <ProductCard key={product.id} imageUrl={product.image} productId={product.id} productName={product.title} productDesc={product.desc} productPrice={product.price} />
                // </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllCategory

type Card = {
        id: string,
        title: string,
        price: number,
        image: string,
        desc: string,
}