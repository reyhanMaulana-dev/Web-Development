import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router'

const Dashboard = () => {
  
  const navigate = useNavigate()
  const homeHandler = ()=>{
    navigate('/')
  }

  return (
    <div className='h-screen flex flex-col gap-4 justify-center items-center'>

      <p className='text-3xl font-semibold'> Dashboard</p>
      <Button onClick={homeHandler}>Home</Button>

    </div>
  )
}

export default Dashboard
