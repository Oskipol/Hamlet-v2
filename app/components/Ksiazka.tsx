import React from 'react'

interface Dane{
    [key: string]: string;
}
interface KsiazkaProps {
    dane: Dane[];
}

const Ksiazka = ({ dane }: KsiazkaProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [flipCount, setFlipCount] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [lastPage, setLastPage] = React.useState(0);

  const handleClick = () => {
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setFlipCount(prev => prev + 1);
  };

  return (
<div className='w-[30%] relative aspect-4/6 z-10' style={{ perspective: '3000px' }}>
        <div className='bg-[#252525] w-full h-full absolute left-0 top-0 rounded-r-sm'></div>
        <div className='bg-gray-500 w-[2%] h-full absolute z-11 left-[0%] top-0'></div>
        {dane.map((item, index) => (
         <React.Fragment key={index}>
        {index>0&&(
          <img key={flipCount} src="page.png" style={{width: `${100-(index*2)}%`}} className={`h-[98%] ${isAnimating ? (isFlipped?"animate-oc":"animate-noc"):""} border-b-yellow-500 border-r-2 rounded-r-2xl border-l-amber-50 left-[0%] top-[50%] translate-y-[-50%] absolute object-cover`} alt=""></img>
        )}




        
        {index===0&&(
          <div key={flipCount} onClick={handleClick} className={`${isAnimating ? (isFlipped?"animate-flip":"animate-unflip"):""} w-full h-full relative z-12 hover:cursor-pointer`} style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}>
          <img src={item.obraz} className='w-full h-full object-cover absolute inset-0' style={{ backfaceVisibility: 'hidden' }} alt="" />
          <div className='w-full h-full absolute inset-0 bg-[#252525] rounded-r-sm shadow-inner flex items-center justify-center' style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className='w-[90%] h-[95%] border border-gray-500 rounded-sm'></div>
          </div>
      </div>
        )}
        
</React.Fragment>
        ))}
</div>

  )
}

export default Ksiazka