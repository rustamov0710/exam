import React, { useEffect, useState } from 'react'
import dishes from '../../restaurant.json'
import Item from '../../components/Item/Item';
const Home = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        setData(dishes);
    }, [data]);

    
    
  return (
<>
    <h1 className='text-4xl font-bold text-center'>Our Restaurants</h1>

    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {data && data.map(food => (
            <Item key={food.id} 
            id={food.id}
            name={food.restaurant.name} 
            line1={food.restaurant.address.line1} 
            line2={food.restaurant.address.line2} 
            img={food.imageCarousel.images[0].url}
            alt={food.imageCarousel.images[0].alt} 
            time={food.restaurant.hours}
            />
        ))}
    </ul>
</>
  )
}

export default Home