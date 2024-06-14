import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className=' sticky top-0 z-10 bg-black text-3xl flex justify-between items-center font-bold p-3 text-red-500 border-b-2 border-gray-500'>
        
        <Link to={'/'}><span>Web<span className='text-white'>Movies</span></span></Link>

        <span className='text-lg text-white flex items-center cursor-pointer'>
          <Link to={'/addmovies'}>
            <Button className='text-white'><AddIcon className='mr-2' color='secondary'/>
            <span className='text-white'>Add New</span></Button>
          </Link>
        </span>
    </div>
  )
}

export default Header