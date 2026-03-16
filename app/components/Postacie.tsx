import React from 'react'
import Powrot from './Powrot'
import { div } from 'motion/react-client';

const Postacie = () => {
    const postacie=[
        {
            name: "Hamlet"
        },
        {
            name: "Klaudiusz"
        },
        {
            name: "Gertruda"
        },
        {
            name: "Król Hamlet"
        },
        {
            name: "Ofelia"
        },
        {
            name: "Poloniusz"
        },
        {
            name: "Laertes"
        },
        {
            name: "Horace"
        },
        {
            name: "Rosencrantz i Guildenstern"
        },
    ];
  return (
    <div id='Postacie' className='w-full animate-pojawianie delay-0 opacity-0 flex justify-center items-center h-full inset-0 hide bg-linear-to-b from-[#1a2a4a] via-[#2d4a6e] to-[#7a9ab8] absolute overflow-hidden'>
        
        <div style={{background: "url('/Hamlet/CloudsLeft.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full z-6 animate-wPrawo -translate-x-full absolute object-cover object-center'>
        <div style={{background: "url('/Hamlet/CloudsRight.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full z-6 animate-wLewo translate-x-[200%] absolute object-cover object-center'>
        <div style={{background: "url('/Hamlet/moon.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full opacity-0 animate-pojawianie duration-4000 delay-4000 z-6  absolute -translate-x-1.25 object-cover object-center'>
        <div style={{background: "url('/Hamlet/Cementary.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full animate-pojawianie duration-4000 delay-4500 opacity-0 h-full z-5 absolute object-cover object-center overflow-x-hidden overflow-y-scroll'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center relative opacity-0 animate-pojawianie delay-5500 z-10 md:gap-5 gap-3 lg:gap-8 max-w-[80%] my-[10%] mx-auto w-full'>
            {postacie.map((item, index)=>(
                <div key={index} className='w-full h-full flex justify-center'>
                    <div className='w-[80%] cursor-pointer relative aspect-7/8' style={{background: "url('/Hamlet/tombstone.png')", backgroundSize: "cover", backgroundPosition: "center", containerType: "inline-size"}}>
                    <p className='absolute w-[50%] left-[50%] top-[43%] font-playfair translate-x-[-50%] text-shadow-sm text-shadow-black translate-y-[-43%]' style={{fontSize: "8cqi"}}>{item.name}</p>
                </div>
                <div className='w-full left-0 top-0 aspect-9/6 absolute' style={{background: "url('/Hamlet/UI.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                
                </div>
                </div>
            ))}
            </div>
            </div>
            </div>
            </div>
            </div>
    <Powrot id='Postacie'/>
    </div>
  )
}

export default Postacie