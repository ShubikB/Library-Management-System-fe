import React, { useEffect, useState } from "react"
import axios from "axios"
import BookCard from "./BookCard"
import MyComponent from "./TurnicatedText"

const FeaturedSection = () => {
  const [featureBooks, setFeatureBooks] = useState([])

  const fetchFeature = async () => {
    try {
      const featureBooksRes = await axios.get("http://localhost:5000/api/v1/book/featuredBooks")
      setFeatureBooks(featureBooksRes.data.books)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFeature()
  }, [])

  return (
    <>
      <h2 className=' mt-4 p-5 text-2xl bg-amber-300 '>Featured Books</h2>

      <div className='flex justify-center items-center flex-row flex-wrap gap-4 mt-3'>
        {featureBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
        <div />
      </div>
      <MyComponent />
    </>
  )
}

export default FeaturedSection
