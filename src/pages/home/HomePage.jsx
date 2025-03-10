import React from "react"
import { ImSearch } from "react-icons/im"

const HomePage = () => {
  return (
    <>
      <div
        className='hero min-h-96'
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/9572630/pexels-photo-9572630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className='hero-overlay'></div>
        <div className='hero-content text-neutral-content  text-center'>
          <div className='max-w-lg'>
            <h1 className='mb-5 text-5xl font-bold'>Cultivate. Create. Connect.</h1>
            <label className='input text-gray-800 h-15'>
             <ImSearch className="text-gray-800 h-7 w-7"/>
              <input type='search' required placeholder='Search Book'  className=" px-3 text-xl"/>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
