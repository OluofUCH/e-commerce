import { Metadata } from 'next';
import React from 'react'
export async function generateMetadata({params  }: {params: {id: string}}): Promise<Metadata> {
    const { id } = await params;
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const pro= await data.json();
return { title: pro.title,
 description: pro.description, 
 }
};

async function page({params}: {params: {id: string}}) {
    const { id } = params;
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const pro= await data.json();
  return (
    <div>
      <img src={pro.image} alt={pro.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{pro.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{pro.description}</p>
        <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">${pro.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default page

type Card = {
        productId: string,
        productName: string,
        productPrice: number,
        imageUrl: string,
        productDesc: string,
    // onAddToCart: Function,
    // onViewDetails: Function,
}