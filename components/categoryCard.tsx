

import React from 'react'
import Link from 'next/link'

function CategoryCard() {
    const categories = ["electronics","jewelery","men's clothing","women's clothing"];
  return (
    
    <div className="flex flex-col justify-center gap-4">
        <div className="text-center p=4">
                <h1 className="text-md sm:text-lg font-black text-white ">Categories</h1>
                <p className="text-gray-400  text-sm max-w-2xl mx-auto">All our categories</p>
            </div>
            <div className="flex justify-center gap-4">
{categories.map((item, index)=>(

    <Link href={`/category/${item}`} key={index}  className=" flex flex-col  shadow-lg rounded-2xl overflow-hidden bg-white border border-gray-800">
      
      <div className="flex flex-col items-center p-6">
        <h1 className="text-md font-bold text-black mb-3 text-center  ">{item}</h1>
        
      </div>
     
    </Link>
    ))}
    </div>
    </div>
  )
}



export default CategoryCard