import React from "react"
import { Link } from "react-router-dom"
import TurnicatedText from "./TurnicatedText"

const BookCard = ({ book }) => {
  return (
    <div className='card bg-base-100 w-96 h-[600px] shadow-sm'>
      <figure className='px-10 pt-10'>
        <img src={book.thumbnail} alt='Shoes' className='rounded-xl h-90 w-60 bg-center bg-' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-xl'>{book.title}</h2>
        <h4 className='font-semibold'>{book.author}</h4>
        <TurnicatedText text={book.description} maxLength={60} />
        <div className='card-actions'>
          <button className='btn btn-primary'>
            <Link to='#'>Burrow Now</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
