import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className='footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 '>
        <div className='flex '>
          <Link to='/about' className='btn btn-ghost'>
            About us
          </Link>
          <Link to='/contact' className='btn btn-ghost'>
            Contact
          </Link>
          <Link to='#' className='btn btn-ghost'>
            Jobs
          </Link>
          <Link to='#' className='btn btn-ghost'>
            Press Kit
          </Link>
        </div>

        <div>
          <div className='grid grid-flow-col gap-4'>
            <Link to=''>
              <img
                width='50'
                height='50'
                src='https://img.icons8.com/ios-filled/50/instagram-new--v1.png'
                alt='instagram-new--v1'
              />
            </Link>
            <Link to=''>
              <img
                width='50'
                height='50'
                src='https://img.icons8.com/ios-filled/50/youtube-play.png'
                alt='youtube-play'
              />
            </Link>
            <Link to=''>
              <img
                width='50'
                height='50'
                src='https://img.icons8.com/ios-filled/50/facebook-new.png'
                alt='facebook-new'
              />
            </Link>
          </div>
        </div>

        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by The Central Library Ltd.
        </p>
      </footer>
    </>
  )
}

export default Footer
