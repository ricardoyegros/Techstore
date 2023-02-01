import React from 'react'
import UserDashboard from '../../pages/UserDashboard'

function Orders() {
  return (
  
        <UserDashboard>
        <div className='grid  w-full'>
          <div className='border'><h1>Ordenes en camino</h1></div>
          <div className='border'><h1>Ordenes realizados</h1></div>
          <div className='border'><h1>Ordenes terminadas</h1></div>
        </div>
        </UserDashboard>
  )
}

export default Orders;