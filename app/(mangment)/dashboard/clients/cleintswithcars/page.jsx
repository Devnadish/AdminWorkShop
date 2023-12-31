import {  getClientsWithCars } from '@/db/cars'
import React from 'react'
export const dynamic = "force-dynamic";
async function page() {
    const data = await getClientsWithCars()
  return (
    <div className='mt-10'>
          {data.map((el) => { return (<div className='flex items-center gap-8 border-b' key={el.id}>
              <p>{el.clientId}</p>
              <p>{el.clientName}</p>
              <p>{ el.CarNo }</p>
              <p>{ el.carName }</p >
            </div>)
          })}


        </div>
  )
}

export default page
