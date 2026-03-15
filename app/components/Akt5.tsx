import React, {useState, useRef, useEffect} from 'react'
import Powrot from './Powrot'
import { div } from 'motion/react-client';

const Akt5 = () => {
    const [papier, setPapier] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.attributeName === 'class') {
                const element = containerRef.current;
                if (element && !element.classList.contains('hide')) {
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
        const handleClick=(dzwiek:boolean)=>{
          setPapier(dzwiek);
          if(dzwiek){
            const sound=document.getElementById("dzwiek") as HTMLAudioElement;
            setTimeout(() => {
                sound.play();
            }, 1000);
          }
        }
        const graj=()=>{
    const txt=document.getElementById("txtA") as HTMLAudioElement;
    if(txt.paused){
      txt.currentTime=0;
      txt.play();
    }
    else txt.pause();
  }
  const zatrzymajI=()=>{
    const txt=document.getElementById("txtA") as HTMLAudioElement;
    setPapier(false);
    txt.pause();
  }
  return (
    <div ref={containerRef} id='Akt V' className='w-full animate-pojawianie delay-0 opacity-0 flex justify-center items-center h-full inset-0 hide absolute overflow-hidden' >
        <div style={{background: "url('/Hamlet/castle.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full z-3 h-full absolute'></div>
        <div style={{background: "url('/Hamlet/castle1.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full z-1 h-full absolute'></div>
        <div style={{background: "url('/Hamlet/reaper.gif')", backgroundSize: "cover", backgroundPosition: "54.5% 70%"}} className='w-full h-full overflow-visible left-0 animate-duchRuch top-[60%] opacity-50 translate-y-[-60%] absolute z-2'></div>
        <div style={{width: "min(50vw, 50vh)"}} className='cursor-pointer aspect-square absolute right-0 bottom-0 z-10 opacity-0 animate-pojawianie duration-3000 delay-2000' onClick={() => handleClick(true)}>
            <div style={{background: "url('/Hamlet/tresc1.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full absolute animate-smierc3'></div>
        <div style={{background: "url('/Hamlet/tresc2.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full absolute animate-smierc2'></div>
        <div style={{background: "url('/Hamlet/tresc.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full absolute animate-smierc'></div>
        </div>
        {papier&&(
          <div className='w-full h-full z-50 flex justify-center items-center absolute'>
            <div style={{background: "url('/Hamlet/smierc2.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-[20%] z-20 rounded-[50%] p-5 border border-amber-50 aspect-square absolute left-0 opacity-0 animate-pojawianie delay-2000 duration-5000 top-[10%]'></div>
            <div style={{backgroundImage: "url('/Hamlet/papyrus1.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} onClick={()=>{handleClick(false)}} className='aspect-[0.73] cursor-pointer md:rotate-0 lg:rotate-0 -rotate-90 lg:h-[80%] md:h-[60%] overflow-visible h-[60%] absolute top-[50%] left-[50%] translate-[-50%] scale-0 animate-pojawienie3'>
                        <div className='w-full h-[80%] mt-[15%] overflow-hidden'>
                          <p className='text-black lg:text-[1.5rem] md:text-[1rem] opacity-0 animate-pojawianie delay-1500 text-[0.8rem] px-[25%] md:px-[20%] lg:px-[20%] flex justify-center items-start font-playfair w-full overflow-y-scroll lg:rotate-0 md:rotate-0 rotate-90 h-[90%] md:h-full lg:h-full' style={{textAlign: 'justify'}}>
                              Do Elsynoru powraca Hamlet. Trafia na pogrzeb Ofelii, która utopiła się w rzece (najprawdopodobniej popełniając samobójstwo); ma miejsce ostra wymiana zdań między Hamletem a Laertesem, który wini go za utratę ojca i siostry. Postanawia wykorzystać to Klaudiusz. Proponuje Laertesowi pojedynek z Hamletem. Laertes wpada na pomysł, by posmarować trucizną klingę swojej broni, a król planuje podać Hamletowi w czasie walki kielich z zatrutym winem. Hamlet, chociaż żałuje swoich ostrych słów wobec Laertesa, przyjmuje wyzwanie. W czasie pojedynku Laertes rani Hamleta, jednak w ferworze walki zatruty floret przechodzi do rąk Hamleta, który także rani swojego przeciwnika. Tymczasem zatrute wino wypija królowa, przez co umiera. Laertes przed śmiercią wyznaje Hamletowi prawdę o zdradzie swojej i Klaudiusza. Hamlet zabija króla. Umierając wyraża prośbę, by nowym władcą Danii został Fortynbras. Tuż po śmierci Hamleta do zamku przybywają Fortynbras powracający z wojny z Polską i posłowie angielscy z informacją o śmierci Gildensterna i Rozenkranca. Horacy, który w obliczu tragedii także chciał wypić zatrute wino, oznajmia im o ostatniej woli księcia.
                          </p>
                          </div>
                        </div>
             <button className='absolute opacity-0 animate-pojawianie delay-1500 right-0 bottom-0 p-0 mx-20 my-10 flex scale-70 justify-end'><img className='w-[30%] bg-[rgba(104,87,87,0.5)] rounded-[50%] transition-all duration-300 cursor-pointer hover:-translate-y-1 m-0 p-0' src="/Hamlet/button.png" onClick={graj} alt="" /></button>

          </div>
        )}
        <Powrot id="Akt V" onPowrot={zatrzymajI}/>
        <audio id='txtA' src="/Hamlet/txt13.mp3"></audio>
        <audio id='dzwiek' src="/Hamlet/scroll.mp3"></audio>
        <audio ref={audioRef} src="/Hamlet/smierc.mp3"></audio>
    </div>
  )
}

export default Akt5