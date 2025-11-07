import React from 'react'
import {FocusCards} from './FocusCard'
import { s } from 'motion/react-client'

const Main = () => {
  const focusCards=[
    {
      title: 'Wstęp',
      src: '/1.jpg'
    },
    {
      title: "Akt I",
      src: "/2.png"
    },
    {
      title: "Akt II",
      src: "/3.png"
    },
    {
      title: "Akt III",
      src: "/4.png"
    },
    {
      title: "Akt IV",
      src: "/5.png"
    },
    {
      title: "Akt V",
      src: "/smierc1.jpg"
    },
    {
      title: "Postacie",
      src: "/6.png"
    },
    {
      title: "Problematyka",
      src: "/k0.jpg"
    }

  ];
  return (
    <div className="w-full h-full absolute top-0 left-0 font-playfair z-0 overflow-y-auto overflow-x-hidden" style={{background: "url('/tlo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} >
      <div className='animate-goIn opacity-0 blur-2xl'>
      <FocusCards cards={focusCards} />
      </div>
    </div>
  )
}

export default Main