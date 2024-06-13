import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='Nav text-white mb-4'>
      <ul className='flex p-4'>
        <Link to="/">My E-Commerce Site</Link>
        <li className='px-4'><Link to="/">Home</Link></li>
        <li className='px-4'><Link to="/list">List Of Products</Link></li>
        <li className='px-4'><Link to="/admin">Admin Dashboard</Link></li>
        <button type="button" class="text-white bg-green-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-green-800"><Link to="/cart">Cart</Link></button>
      </ul>
      
    </div>
  )
}

export default Navbar
