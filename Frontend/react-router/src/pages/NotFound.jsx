import React from 'react'
import Button from '../components/Button'
import { NavLink, useNavigate } from 'react-router'

const NotFound = () => {

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center gap-5'>

        <p className='text-3xl font-semibold'> Page not found..</p>
        <NavLink to={'/'}>
          <Button>Back To Home</Button>
        </NavLink>

      </div>
    </div>
  )
}

export default NotFound
