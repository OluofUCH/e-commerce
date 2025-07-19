import React from 'react'
import Link from "next/link"
function Navlink(props: any) {
  return (
    <Link href={props.href} className=" px-6 py-3 font-semibold text-gray-300 hover:text-white">
        <span className="">
            {props.name}
        </span>
    </Link>
  )
}

export default Navlink