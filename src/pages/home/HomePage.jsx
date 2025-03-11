import React from "react"
import { ImSearch } from "react-icons/im"
import FeaturedSection from "../../components/bookCard/FeaturedSection"

const HomePage = () => {
  return (
    <>
      <div
        className='flex justify-center items-center flex-col bg-center bg-cover min-h-[400px] '
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/9572630/pexels-photo-9572630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <h1 className='mb-5 text-5xl text-white font-bold'>Read. Learn. Grow.</h1>

        <div className='flex gap-1'>
          <label className='input'>
            <input
              type='text'
              placeholder='Search Book'
              className='text-center text-gray-800 text-lg'
            />
          </label>

          <button className='btn bg-amber-100 '>
            <ImSearch />
            Search
          </button>
        </div>
      </div>

      <FeaturedSection />
    </>
  )
}

export default HomePage
