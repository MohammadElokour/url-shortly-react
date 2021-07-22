import React from 'react'

function Card({ icon, title, text }) {
  return (
    <div className="bg-white w-full rounded-md relative px-4 pt-16 pb-8" >
      <div className="bg-violet p-4 rounded-full w-16 -top-8 absolute md:left-auto">
        <img src={`/images/${icon}.svg`} alt="" className="" />
      </div>
      <h2 className="font-bold mb-4 text-xl text-gray-800 whitespace-nowrap">{title}</h2>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  )
}

export default Card
