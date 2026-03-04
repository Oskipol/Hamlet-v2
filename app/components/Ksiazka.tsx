import { p } from 'motion/react-client';
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
  const [lastPage, setLastPage] = React.useState(dane.length);
  const [chwila, setChwila]=React.useState(false);
  const handleClick = () => {
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setFlipCount(prev => prev + 1);
    setLastPage(dane.length);
    if(chwila)setChwila(false);
    else setTimeout(()=>setChwila(true), 300);
  };
  const handlePage=(index:number)=>{
    const pageElement = document.getElementById(`page-${index}`);
    const textElement = document.getElementById(`text-${index}`);
    if(index==lastPage){
      setLastPage(prev=>prev+1);
    if (pageElement) {
      pageElement.style.zIndex = `${20+index}`;
    }
    }
    else if(index<lastPage) {
      setLastPage(prev=>prev-1);
    if (pageElement) {
      pageElement.style.zIndex = `${20-index}`;
    }
    }
    else setLastPage(index+1)
    
  }

  return (
<div className='w-[30%] relative aspect-4/6 z-10' style={{ perspective: '3000px' }}>
        <div className='bg-[#252525] w-full h-full absolute left-0 top-0 rounded-r-sm'></div>
        <div className='bg-gray-500 w-[2%] h-full absolute z-11 left-[0%] top-0'></div>
        {dane.map((item, index) => (
         <React.Fragment key={index}>
        {index>0&&(
          <div className='absolute w-full h-full left-0 top-0'><p id={`text-${index}`} className={`absolute w-[65%] napisy text-center flex justify-center items-center text-black overflow-hidden h-[75%] top-[50%] left-[50%] rounded-2xl -translate-[50%] ${chwila?"z-30":"z-0"}`}>{(index+1)===lastPage&&chwila?item.tekst1:""}</p><img id={`page-${index}`} src="page.png" onClick={()=>{handlePage(index)}} style={{width: `${100-(index*2)}%`, transformOrigin: "left center", transformStyle: "preserve-3d", zIndex: `${chwila?(20+index):"10"}`}} className={`h-[98%]  ${(chwila)?(index>=lastPage?"animate-flip":""):""} cursor-pointer border-b-yellow-500 border-r-2 strony rounded-r-2xl border-l-amber-50 left-[0%] top-[50%] translate-y-[-50%] absolute object-cover`} alt=""></img></div>
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