import React from 'react'
import { useLocation } from 'react-router';

 function HomePage() {
  const location = useLocation();
  console.log(location);

  return (
      <div className="HomePage">
        <h1 className='text-center text-2xl font-bold p-10 text-gray-800'>Home Page</h1>
      </div>
  )
}

export default HomePage;