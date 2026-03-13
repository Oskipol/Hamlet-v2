import React from 'react'
import Powrot from './Powrot'

const Akt4 = () => {
  return (
    <div id='Akt IV' className='w-full h-full bg-black inset-0 hide absolute animate-pojawianie opacity-0 overflow-hidden'>
      <img src="sea.png" className='w-full h-full animate-wGore object-cover absolute object-center' alt="" />
      <img src="sea1.png" className='w-full h-full opacity-0 duration-3000 delay-2500 animate-pojawianie object-cover absolute object-center' alt="" />
      <div className='w-full animate-wGore z-2 h-full absolute' style={{background: "url('sea2.png')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <img src="/ship1.png" style={{objectPosition: "40% 60%"}} className='absolute cursor-pointer animate-idz w-full object-cover h-full left-[0%] bottom-[0%] -rotate-10 overflow-visible' alt="" />
        <div style={{background: "url('/coa.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='h-full opacity-0 animate-krople w-full absolute z-20'></div>
        <div style={{background: "url('/rain.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='h-full lg:duration-300 duration-1500 md:duration-500 animate-deszcz opacity-100 w-full absolute z-20'></div>
        <div style={{background: "url('/lightining.png')", backgroundSize: "cover", backgroundPosition: "50% 100%"}} className='h-full opacity-0 w-full absolute z-20'></div>
      
    <Powrot id="Akt IV"/>
    </div>
  )
}

export default Akt4