"use client"

import React from 'react'
import Link from 'next/link'

function ProductCard(props: Card) {
  return (
    <div  className=" flex flex-col bg-gray-900 shadow-lg rounded-2xl overflow-hidden h-4/5 border border-gray-800">
      <div className="relative overflow-hidden">
        <img src={props.imageUrl} alt={props.productName} className="w-full h-56 object-cover" />
      </div>
      <div className="flex flex-col items-center p-6">
        <h1 className="text-md font-bold text-white mb-3 text-center  ">{props.productName}</h1>
        {/* <p className="text-gray-400 text-sm mb-4 text-center ">{props.productDesc}</p> */}
        <div className="mt-auto">
          <p className="text-lg font-black text-white">${props.productPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <Link href={`/product/${props.productId}`} className="w-full h-12 bg-white rounded-xl flex items-center justify-center ">
          <span className="text-black font-semibold text-sm">View Product</span>
        </Link>
      </div>
    </div>
  )
}

type Card = {
        productId: string,
        productName: string,
        productPrice: number,
        imageUrl: string,
        productDesc: string,
}

export default ProductCard