import React from 'react'

const Powrot = ({id}:{id:string}) => {
  return (
    <button className="px-20 z-10 py-10 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)] hover:text-shadow-black bg-transparent text-white absolute left-0 bottom-0 cursor-pointer rounded-lg font-bold lg:text-[3rem] md:text-[2rem] text-[1rem] font-playfair transform hover:-translate-y-1 transition-all duration-300" onClick={()=>{document.getElementById(id)?.classList.add('hide')}}>
        Powrót
      </button>
  )
}

export default Powrot