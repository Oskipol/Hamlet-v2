import React from 'react'
import Powrot from './Powrot'

const Akt4 = () => {
  return (
    <div id='Akt IV' className='w-full h-full bg-black inset-0 hide absolute animate-pojawianie opacity-0 overflow-hidden'>
      <img src="sea.png" className='w-full h-full animate-wGore object-cover absolute object-center' alt="" />
      <img src="sea1.png" className='w-full h-full opacity-0 object-cover absolute object-center' alt="" />
      <div className='w-full animate-wGore h-full absolute' style={{background: "url('sea2.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <img src="ship1.png" className='absolute w-full scale-50 left-0 object-cover object-center top-0' alt="" />
      </div>
    <Powrot id="Akt IV"/>
    </div>
  )
}

export default Akt4