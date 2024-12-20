import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({img, name, line1, line2, alt, time, id}) => {
  return (
    <li className='hover:shadow-lg transition-shadow duration-300 px-3 py-5 rounded'>
      <img className='w-full h-48 object-cover' src={img} alt={alt} />
      <div className='flex flex-col items-start justify-center'>
        <h2 className='text-lg font-semibold text-gray-800'>{name}</h2>
        <p className='text-gray-600 text-sm'>{line1} <br/> {line2}</p>
        <p className='mt-2 text-gray-800 font-medium'>{time}</p>
        <div className="mt-4 flex space-x-2">
      <button className="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600 text-sm">
        09:30
      </button>
      <button className="bg-gray-300 text-white py-1 px-4 rounded hover:bg-gray-400 text-sm">
        10:15
      </button>
      <button className="bg-gray-600 text-white py-1 px-4 rounded hover:bg-gray-700 text-sm">
        <Link to={`./${id}`}>More</Link>
      </button>
    </div>
      </div>
    </li>
  )
}

export default Item