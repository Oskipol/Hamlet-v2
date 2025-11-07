import { image } from 'motion/react-client'
import React from 'react'

const Wstep = () => {
  return (
    <div id='Wstęp' style={{background: "url('ks.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full hide h-full absolute inset-0'>
      <div style={{backgroundImage: "url('/papyrus1.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} className=' aspect-[0.73] md:rotate-0 lg:rotate-0 rotate-[-90deg] lg:h-[80%] md:h-[60%] overflow-visible h-[60%] absolute top-[50%] left-[50%] translate-[-50%] animate-papyrus'>
      <p className='text-black lg:text-[1.5rem] md:text-[1rem] text-[1rem]  px-[25%] md:px-[20%] lg:px-[20%] flex justify-center items-center  font-playfair w-full overflow-y-auto lg:rotate-0 md:rotate-0 rotate-90 h-[90%] md:h-full lg:h-full' style={{textAlign: 'justify'}}>
        Hamlet' Williama Shakespeara to Dramat napisany na przełomie XVI i XVII wieku. Głównym źródłem Szekspira był zapewne Ur-Hamlet (Pra-Hamlet; 1588), grany na podobny temat, treść jednak nie przetrwała; wiadomo jedynie iż była to grana w Londynie tragedia o Hamlecie i że występował w niej duch, żądający od Hamleta zemsty. Treść tego utworu, którego autorem być może był Thomas Kyd, najpewniej wywodziła się z Histories Tragiques Thomasa Belleforesta (1570), w której zawarte było francuskie tłumaczenie łacińskiego tekstu Saxo Grammaticusa. Treść dramatu wywodzi się z historii spisanej przez Saxo Grammaticusa w jego Gesta Danorum (ok. 1200). Według wersji Saxo, król Danii Roryk dzieli władzę nad Jutlandią pomiędzy dwóch braci: Orvendila i Fengiego. Dodatkowo Orvendil zaręcza się z piękną córką króla – Geruth i ma z nią syna Amletha. Ale Fengi, pożądając narzeczonej brata i chcąc panować nad całą Jutlandią, zabija brata. Żeni się z Geruth i ogłasza się królem Jutlandii. Amleth, obawiając się o własne życie, udaje szaleństwo. Planuje zemstę, w czym dopomaga mu ukochana Ofelia, dokonuje jej i staje się nowym władcą.
      </p>
      </div>
      <button className="px-20 py-10 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)] hover:text-shadow-black bg-transparent text-white absolute left-0 bottom-0 cursor-pointer rounded-lg font-bold lg:text-[3rem] md:text-[2rem] text-[1rem] font-playfair transform hover:-translate-y-1 transition-all duration-300" onClick={()=>{document.getElementById('Wstęp')?.classList.add('hide')}}>
  Powrót
</button>
      </div>
  )
}

export default Wstep