import React from 'react'
import dishes from '../../restaurant.json'
import { Link, useParams } from 'react-router-dom'
import './SinglePage.css'

const SinglePage = () => {
  const params = useParams();
  let id = params.foodId;

  const food = dishes.find(dish => dish.id == id);

  
  
  
  return (
    <>
    <Link to='/'>
    <h1 className='text-center mb-10 title2'>
      Go Back
    </h1>
    </Link>
    <div className="text-start">
  <img
    src={food.imageCarousel.images[0].url}
    alt={food.imageCarousel.images[0].alt}
    className="w-full img rounded-lg object-cover mb-4"
  />

  <h1 className="text-2xl title  font-semibold text-orange-500 mb-2">{food.restaurant.name}</h1>

  <div className="flex items-center gap-80">
  <div className="mb-4 text-gray-600">
    <div className="flex gap-5" >
    <img src="./Location_icon_ic.svg" alt="" />
    <div className="flex flex-col">
    <p>{food.restaurant.address.line1}</p>
    <p>{food.restaurant.address.line2}</p>
    </div>
    </div>
    <div className="flex items-center gap-5">
    <img src="./icon.svg" alt="" />
    <span className="block mt-2 text-sm text-gray-800">{food.restaurant.hours}</span>
    </div>
    <div className="flex items-center gap-5 mt-5">
      <img src="./menu.svg" alt="" />
    <p className='text'>Show Menu</p>
    </div>
  </div>

  <div className="mb-4">
    <img src="./charm_menu-hamburger.svg" alt="" />
    <p className="text-gray-600">{food.restaurant.description}</p>
  </div>
  </div>

  <h2 className="text-lg font-semibold text-gray-800 mb-2">Available Time Slots</h2>
  <div className="flex flex-wrap gap-2">
    {food.timeSlots.map((timeSlot, index) => (
      <button
        key={index}
        className={`py-1 px-4 rounded text-white transition-all duration-300 ${
          timeSlot.available
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-gray-300 text-gray-500"
        }`}
      >
        {timeSlot.time}
      </button>
    ))}
  </div>
</div>

    </>
  )
}

export default SinglePage