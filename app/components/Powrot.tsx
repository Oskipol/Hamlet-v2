import React from 'react'

type PowrotProps = {
  id: string;
  onPowrot?: () => void;
};

const Powrot = ({id, onPowrot}: PowrotProps) => {
  const handleClick = () => {
      if(onPowrot) onPowrot();
      document.getElementById(id)?.classList.add('hide');
  };
  return (
    <button className="px-20 z-100 py-10 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)] hover:text-shadow-black bg-transparent text-white absolute left-0 bottom-0 cursor-pointer rounded-lg font-bold lg:text-[3rem] md:text-[2rem] text-[1rem] font-playfair transform hover:-translate-y-1 transition-all duration-300" onClick={handleClick}>
      Powrót
    </button>
  );
}

export default Powrot