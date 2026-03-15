import React from 'react'
import Powrot from './Powrot';
import Ksiazka from './Ksiazka';

const Akt1 = () => {
  const dane = [
    {
      obraz: "/Hamlet/book1.jpg",
      tekst1: "",
      tekst2: "",
      kolor: "#252525"
    },
    {
      obraz: "/Hamlet/strona.jpg",
      tekst1: "Akcja sztuki rozgrywa się prawie w całości na zamku króla Danii w Elsynorze i rozpoczyna się po nagłej śmierci króla Hamleta. Na tron wstępuje jego brat Klaudiusz i żeni się z wdową po Hamlecie – królową Gertrudą. Do kraju wraca z Wittenbergi syn zmarłego króla, również Hamlet.",
      tekst2: "Zrozpaczony po śmierci ojca książę jest dodatkowo zgorszony postępowaniem matki, która wyszła za jego stryja niedługo po śmierci poprzedniego męża (w czasach Szekspira było to uznawane za kazirodztwo). Za zgodą króla Laertes, syn Poloniusza i brat Ofelii, wyjeżdża do Francji.",
      dzwiek: "/Hamlet/txt3.mp3"
    },
    {
      obraz: "/Hamlet/strona.jpg",
      tekst1: "Przed wyjazdem radzi Ofelii, by nie wierzyła w wyznania miłosne Hamleta, które, nawet jeżeli są prawdziwe, nie doprowadzą do niczego dobrego z powodu różnicy w pochodzeniu. Także Poloniusz zakazuje córce spotykać się z Hamletem, bojąc się o jej dobre imię.",
      tekst2: "Tymczasem na zamku zaczyna pojawiać się duch zmarłego króla Hamleta. Poinformowany o tym przez swego przyjaciela Horacego i oficerów straży książę spotyka się z Duchem. Ten wyznaje młodemu Hamletowi, iż został zabity przez brata – obecnego króla i każe synowi",
      dzwiek: "/Hamlet/txt4.mp3"
    },
    {
      obraz: "/Hamlet/strona.jpg",
      tekst1: "przysiąc, że zostanie przez niego pomszczony. Zakazuje mu jednak mścić się na matce.",
      tekst2: "",
      dzwiek: "/Hamlet/txt5.mp3"
    },
    {
      obraz: "/Hamlet/strona.jpg",
      tekst1: "",
      tekst2: "",
    }
  ]
  return (
    <div id='Akt I' style={{background: "url('/Hamlet/tlo2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full overflow-hidden flex items-center justify-center opacity-0 delay-0 animate-pojawianie hide h-full absolute inset-0'>
      <div className='w-full h-full absolute bg-linear-to-b opacity-80 from-black to-[#222942] z-2'>
        </div>
        <div className='absolute w-[20%] aspect-4/5 bottom-0 right-0 m-10'>
      <img src="/Hamlet/duch.png" alt="" className='absolute contrast-200 animate-duch1 opacity-0 w-full z-10 top-0 left-[50%] translate-x-[-55%]'/>
      <div className='bg-black w-full h-[10%] z-10 rounded-[50%] animate-cien absolute bottom-[5%] scale-50 opacity-0'></div>
        </div>
     
    <div className='animate-duze scale-0 z-10 relative'>
      < Ksiazka dane={dane}/>
    </div>
    <Powrot id='Akt I'/>
    </div>
  )
}

export default Akt1