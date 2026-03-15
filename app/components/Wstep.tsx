"use client"
import Powrot from './Powrot';
import React, { useEffect, useRef } from 'react'

const Wstep = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [n1, setN1] = React.useState(true);
  const [graj, setGraj] = React.useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const element = containerRef.current;
          if (element && !element.classList.contains('hide')) {
            audioRef.current?.play();
          }
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);
  useEffect(()=>{
    const a1 = document.getElementById('a1') as HTMLAudioElement | null;
    const a2 = document.getElementById('a2') as HTMLAudioElement | null;
    if(graj){
      if(n1) a1?.play();
      else a2?.play();
    }
    else{
      a1?.pause();
      a2?.pause();
      a1!.currentTime=0;
      a2!.currentTime=0;
    }
    
  }, [graj])
const zatrzymaj=()=>{
  const a1 = document.getElementById('a1') as HTMLAudioElement | null;
  const a2 = document.getElementById('a2') as HTMLAudioElement | null;
  a1?.pause();
  a2?.pause();
  a1!.currentTime=0;
  a2!.currentTime=0;
}

  return (
    <div ref={containerRef} id='Wstęp' style={{background: "url('/Hamlet/ks.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full hide h-full opacity-0 animate-pojawianie delay-0 absolute inset-0'>
      <div className='absolute opacity-0 bg-[#b88a53] z-12 w-[20%] aspect-square rounded-[50%] left-[50%] top-[50%] translate-[-50%] animate-ogien'></div>
      <div style={{backgroundImage: "url('/Hamlet/papyrus1.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} onClick={()=>{n1?setN1(false):setN1(true)}} className='aspect-[0.73] cursor-pointer md:rotate-0 lg:rotate-0 -rotate-90 lg:h-[80%] md:h-[60%] overflow-visible h-[60%] absolute top-[50%] left-[50%] translate-[-50%] animate-papyrus'>
        <div className='w-full h-[80%] mt-[10%] overflow-hidden'>
          <p className='text-black lg:text-[1.5rem] md:text-[1rem] text-[0.8rem] px-[25%] md:px-[20%] lg:px-[20%] flex animate-pojawianie opacity-0 justify-center items-start font-playfair w-full overflow-y-scroll  lg:rotate-0 md:rotate-0 rotate-90 h-[90%] md:h-full lg:h-full' style={{textAlign: 'justify'}}>
          {n1?"Hamlet' Williama Shakespeara to Dramat napisany na przełomie XVI i XVII wieku. Głównym źródłem Szekspira był zapewne Ur-Hamlet (Pra-Hamlet; 1588), grany na podobny temat, treść jednak nie przetrwała; wiadomo jedynie iż była to grana w Londynie tragedia o Hamlecie i że występował w niej duch, żądający od Hamleta zemsty. Treść tego utworu, którego autorem być może był Thomas Kyd, najpewniej wywodziła się z Histories Tragiques Thomasa Belleforesta (1570), w której zawarte było francuskie tłumaczenie łacińskiego tekstu Saxo Grammaticusa. Treść dramatu wywodzi się z historii spisanej przez Saxo Grammaticusa w jego Gesta Danorum (ok. 1200). Według wersji Saxo, król Danii Roryk dzieli władzę nad Jutlandią pomiędzy dwóch braci: Orvendila i Fengiego. Dodatkowo Orvendil zaręcza się z piękną córką króla – Geruth i ma z nią syna Amletha. Ale Fengi, pożądając narzeczonej brata i chcąc panować nad całą Jutlandią, zabija brata. Żeni się z Geruth i ogłasza się królem Jutlandii. Amleth, obawiając się o własne życie, udaje szaleństwo. Planuje zemstę, w czym dopomaga mu ukochana Ofelia, dokonuje jej i staje się nowym władcą.":<>Osoby: <br />Klaudiusz — król duński<br/> Hamlet — syn poprzedniego, a synowiec teraźniejszego króla<br/> Poloniusz — szambelan<br/> Horacy — przyjaciel Hamleta <br/>Laertes — syn Poloniusza<br/> Woltymand, Korneliusz, Rozenkranc, Gildenstern, Ozryk — dworzanie<br/> Ksiądz<br/> Marcellus, Bernardo — oficerowie<br/> Francisko — żołnierz<br/> Rajnold — sługa Poloniusza <br/>Rotmistrz<br/> Poseł<br/> Duch ojca Hamleta<br/> Fortynbras — książę norweski<br/> Gertruda — królowa duńska, matka Hamleta<br/> Ofelia — córka Poloniusza<br/> Panowie, damy, oficerowie, żołnierze, aktorowie, grabarze, majtkowie, posłowie i inne osoby.<br/> Rzecz się odbywa w Elsynorze</>}
        </p>
        </div>
      </div>
      <Powrot onPowrot={zatrzymaj} id="Wstęp" />
      <button className='absolute right-0 bottom-0 p-0 mx-20 my-10 flex scale-70 justify-end'><img onClick={()=>{graj?setGraj(false):setGraj(true)}} className='w-[30%] bg-[rgba(104,87,87,0.3)] rounded-[50%] transition-all duration-300 cursor-pointer hover:-translate-y-1 m-0 p-0' src="/Hamlet/button.png" alt="" /></button>
      <audio ref={audioRef} src="/Hamlet/scroll.mp3" preload="auto"></audio>
      <audio id='a1' src="/Hamlet/tekst1.mp3"></audio>
      <audio id='a2' src="/Hamlet/tekst2.mp3"></audio>
    </div>
  )
}

export default Wstep