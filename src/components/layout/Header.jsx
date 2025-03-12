import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className='navbar justify-between bg-base-100 shadow-sm px-10 '>
        <div className=' btn btn-ghost text-xl'>
          <Link to='/'>The Central Library</Link>
        </div>

        <div className='flex justify-center items-center'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0'
            >
              <li>
                <Link to='/about'>About</Link>
              </li>

              <li>
                <Link to='/contact'>Contact</Link>
              </li>

              {/* <li>
                <Link to='#'>Dashboard</Link>
              </li> */}

              <li>
                <Link to='/signup'>SignUp</Link>
              </li>

              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
            </ul>
          </div>

          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <Link to='/about'>About</Link>
              </li>

              <li>
                <Link to='/contact'>Contact</Link>
              </li>

              {/* <li>
                <Link to='#'>Dashboard</Link>
              </li> */}

              <li>
                <Link to='/signup'>SignUp</Link>
              </li>

              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=' hidden '>
          <div className='dropdown dropdown-end '>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img
                  alt='User Profile'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/setting'>Setting</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
