import React from 'react'
import Powrot from './Powrot';
import Ksiazka from './Ksiazka';

const Akt1 = () => {
  const dane = [
    {
      obraz: "book1.jpg",
      tekst1: "",
      tekst2: ""
    },
    {
      obraz: "book2.jpg",
      tekst1: "",
      tekst2: ""
    },
    {
      obraz: "book3.jpg",
      tekst1: "",
      tekst2: ""
    }
  ]
  return (
    <div id='Akt I' style={{background: "url('tlo2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full overflow-hidden flex items-center justify-center opacity-0 delay-0 animate-pojawianie hide h-full absolute inset-0'>
      <div className='w-full h-full absolute bg-linear-to-b opacity-80 from-black to-[#222942] z-2'>
        </div>
        <div className='absolute w-[20%] aspect-4/5 bottom-0 right-0 m-10'>
      <img src="duch.png" alt="" className='absolute animate-duch1 opacity-0 w-full z-10 top-0 left-[50%] translate-x-[-55%]'/>
      <div className='bg-black w-full h-[20%] z-10 rounded-[50%] animate-cien absolute bottom-0 scale-50 opacity-0'></div>
        </div>
     
    < Ksiazka dane={dane}/>
    <Powrot id='Akt I'/>
    </div>
  )
}

export default Akt1