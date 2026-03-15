import Powrot from './Powrot'
import React, { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai';
import { VolumeAtom } from '../atoms/VolumeAtom';
import { div } from 'motion/react-client';

const Akt4 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume] = useAtom(VolumeAtom);
  const [chest, setChest] = useState(false);
  useEffect(() => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const element = containerRef.current;
            if (element && !element.classList.contains('hide')&&!volume) {
              audioRef.current?.play();
            }
            else{
              audioRef.current?.pause();
            }
          }
        });
      });
  
      if (containerRef.current) {
        observer.observe(containerRef.current, { attributes: true });
      }
  
      return () => observer.disconnect();
    }, []);
  const handlePowrot = () => {
    const txt=document.getElementById("txt") as HTMLAudioElement;
    txt.pause();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
useEffect(()=>{
      if(!containerRef.current?.classList.contains('hide')){
        if(volume){
        audioRef.current?.pause();
      }
      else{
        audioRef.current?.play();
      }
      }
    
  }, [volume]);

  const handleChestClick=(open:boolean)=>{
    setChest(open);
    if(open){
      const openS=document.getElementById("open") as HTMLAudioElement;
      const scroll=document.getElementById("scroll") as HTMLAudioElement;
      setTimeout(() => {
        openS.play();
      }, 1000);
      setTimeout(() => {
        scroll.play();
      }, 3000);
    }
  }
  const graj=()=>{
    const txt=document.getElementById("txt") as HTMLAudioElement;
    if(txt.paused){
      txt.currentTime=0;
      txt.play();
    }
    else txt.pause();
  }

  return (
    <div ref={containerRef} id='Akt IV' className='w-full h-full bg-black inset-0 hide absolute animate-pojawianie opacity-0 overflow-hidden'>
      <img src="/Hamlet/sea.png" className='w-full h-full animate-wGore object-cover absolute object-center' alt="" />
      <img src="/Hamlet/sea1.png" className='w-full h-full opacity-0 duration-3000 delay-2500 animate-pojawianie object-cover absolute object-center' alt="" />
      <div className='w-full animate-wGore z-2 h-full absolute' style={{background: "url('/Hamlet/sea2.png')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
      <img src="/Hamlet/ship1.png" style={{objectPosition: "40% 60%"}} className='absolute cursor-pointer animate-idz w-full object-cover h-full left-[0%] bottom-[0%] -rotate-10 overflow-visible' alt="" />
      <div style={{background: "url('/Hamlet/coa.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='h-full opacity-0 animate-krople w-full absolute z-20'></div>
      <div style={{background: "url('/Hamlet/rain2.png')", backgroundPosition: "center"}} className='h-full lg:duration-300 duration-1500 md:duration-500 animate-deszcz opacity-100 w-full absolute z-20'></div>
      <div style={{background: "url('/Hamlet/lightining.png')", backgroundSize: "cover", backgroundPosition: "50% 100%"}} className='h-full opacity-0 animate-piorun w-full absolute z-20'></div>
      <div className='absolute w-[30%] min-w-130 opacity-50 aspect-square left-[50%] top-[50%] translate-[-50%] z-20 cursor-pointer' onClick={()=>handleChestClick(true)}></div>
      {chest&&(
        <div className='w-full h-full z-50 flex justify-center items-center absolute'>
            <div className='w-[40%] animate-skrzynia aspect-7/6' style={{background: "url('/Hamlet/chest.png')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
            <div style={{backgroundImage: "url('/Hamlet/papyrus1.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} onClick={()=>{handleChestClick(false)}} className='aspect-[0.73] cursor-pointer md:rotate-0 lg:rotate-0 -rotate-90 lg:h-[80%] md:h-[60%] overflow-visible h-[60%] absolute top-[50%] left-[50%] translate-[-50%] scale-0 animate-pojawienie2'>
            <div className='w-full h-[80%] mt-[15%] overflow-hidden'>
              <p className='text-black lg:text-[1.5rem] md:text-[1rem] opacity-0 animate-pojawianie delay-3500 text-[0.8rem] px-[25%] md:px-[20%] lg:px-[20%] flex justify-center items-start font-playfair w-full overflow-y-scroll lg:rotate-0 md:rotate-0 rotate-90 h-[90%] md:h-full lg:h-full' style={{textAlign: 'justify'}}>

Zostaje zatrzymany na rozkaz króla i jeszcze tego samego dnia wysłany do Anglii. Klaudiusz postanawia pozbyć się bratanka. Wysyła z Hamletem Gildensterna i Rozenkranca, dając im list, na podstawie którego Hamlet miał zostać uwięziony i zabity. Po drodze Hamlet napotyka wojska norweskie pod wodzą Fortynbrasa maszerujące na Polskę. Na statku Hamlet wykrada list Klaudiusza i zmienia jego treść, wydając tym samym wyrok śmierci na Gildensterna i Rozenkranca. Statek atakują piraci. Hamlet zostaje wzięty do niewoli, piraci jednak odstawiają go do Danii. Do kraju tymczasem z Francji wraca Laertes, syn Poloniusza, brat Ofelii. Wywołuje rebelię i wdziera się do zamku, żądając ukarania zabójcy Poloniusza. Klaudiusz uspokaja Laertesa, obiecując mu zorganizowanie sprawiedliwego procesu. Obiecuje także, iż nie będzie dłużej osłaniał Hamleta. Kolejnym, po śmierci ojca, ciosem dla Laertesa jest obłęd Ofelii, w jaki popadła po śmierci ojca.
              </p>
              </div>
            </div>
 <button className='absolute opacity-0 animate-pojawianie delay-3500 right-0 bottom-0 p-0 mx-20 my-10 flex scale-70 justify-end'><img onClick={graj} className='w-[30%] bg-[rgba(104,87,87,0.3)] rounded-[50%] transition-all duration-300 cursor-pointer hover:-translate-y-1 m-0 p-0' src="/Hamlet/button.png" alt="" /></button>
        </div>
      )}
      
      <Powrot id="Akt IV" onPowrot={handlePowrot} />
      <audio ref={audioRef} src="/Hamlet/sea.mp3" preload="auto"></audio>
      <audio id='open' src="/Hamlet/open.mp3"></audio>
      <audio id='scroll' src="/Hamlet/scroll.mp3"></audio>
      <audio id='txt' src="/Hamlet/txtS.mp3"></audio>
    </div>
  )
}

export default Akt4