import React, {useState, useRef, useEffect} from 'react'
import Powrot from './Powrot'


const Problematyka = () => {
    const containerRef=useRef<HTMLDivElement>(null);
    const [drzwi, setDrzwi]=useState(false);
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
              const element = containerRef.current;
              if (element && !element.classList.contains('hide')) {
                setTimeout(()=>{
                    const door=document.getElementById('drzwi') as HTMLDivElement | null;
                    if (door) {
                        door.style.backgroundImage = 'url("/Hamlet/drzwi.gif")';
                    }
                }, 2000)
              }
            }
          });
        });
    
        if (containerRef.current) {
          observer.observe(containerRef.current, { attributes: true });
        }
    
        return () => observer.disconnect();
      }, []);
      const koniec2=()=>{
        setDrzwi(false);
      }

  return (
    <div ref={containerRef} id='Problematyka' className='w-full h-full absolute hide inset-0 opacity-0 bg-black animate-pojawianie flex justify-center items-center'>
        <div className='w-full h-full bg-[url("/Hamlet/dom.gif")] absolute object-center object-cover'></div>
        <div className='w-full h-full bg-[url("/Hamlet/interior.png")] absolute object-center object-cover'></div>
        
            <div id="drzwi" className='w-full h-full brightness-30 contrast-105 absolute object-center object-cover'></div>
        


    <Powrot id='Problematyka' onPowrot={koniec2}/>
    <audio src="/Hamlet/mom.mp3"></audio>
    </div>
  )
}

export default Problematyka