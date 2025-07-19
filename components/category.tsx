import React from 'react'
import ProductCard from '@/components/productCard';

import fetchedProducts from '../lib/products';

async function Category(props: { category: string }) {

    
      const fetchedProduct = await fetchedProducts();
    const category = props.category;
  const filteredProduct: Card[] = fetchedProduct.filter((item: Card) => item.category === category);
  if (!filteredProduct || filteredProduct.length === 0) {
    return <div className="text-center text-gray-500">No products available</div>;
  }
  const log=()=>{
    console.log("first")
  }
  return (
    <div className='pt-[4rem] px-4 sm:px-6 lg:px-8 min-h-screen '>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{props.category}</h1>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">Explore our amazing collection of {props.category}</p>
            </div>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
                {filteredProduct.map((product: Card) => (
                  // <div key={product.id} className="">
                <ProductCard key={product.id} imageUrl={product.image} productId={product.id} productName={product.title} productDesc={product.desc} productPrice={product.price} />
                // </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category;

type Card = {
        id: string,
        title: string,
        price: number,
        image: string,
        desc: string,
        category: string,
}