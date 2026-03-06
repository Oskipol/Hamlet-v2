import React from 'react'
import Powrot from './Powrot'
import Ksiazka from './Ksiazka'

const Akt2 = () => {
    const dane = [
    {
      obraz: "book2.jpg",
      tekst1: "",
      tekst2: "",
      kolor: "#100404"
    },
    {
      obraz: "page1.png",
      tekst1: "Akcja sztuki rozgrywa się prawie w całości na zamku króla Danii w Elsynorze i rozpoczyna się po nagłej śmierci króla Hamleta. Na tron wstępuje jego brat Klaudiusz i żeni się z wdową po Hamlecie – królową Gertrudą. Do kraju wraca z Wittenbergi syn zmarłego króla, również Hamlet.",
      tekst2: "Zrozpaczony po śmierci ojca książę jest dodatkowo zgorszony postępowaniem matki, która wyszła za jego stryja niedługo po śmierci poprzedniego męża (w czasach Szekspira było to uznawane za kazirodztwo). Za zgodą króla Laertes, syn Poloniusza i brat Ofelii, wyjeżdża do Francji.",
      dzwiek: "txt3.mp3"
    },
    {
      obraz: "page1.png",
      tekst1: "Przed wyjazdem radzi Ofelii, by nie wierzyła w wyznania miłosne Hamleta, które, nawet jeżeli są prawdziwe, nie doprowadzą do niczego dobrego z powodu różnicy w pochodzeniu. Także Poloniusz zakazuje córce spotykać się z Hamletem, bojąc się o jej dobre imię.",
      tekst2: "Tymczasem na zamku zaczyna pojawiać się duch zmarłego króla Hamleta. Poinformowany o tym przez swego przyjaciela Horacego i oficerów straży książę spotyka się z Duchem. Ten wyznaje młodemu Hamletowi, iż został zabity przez brata – obecnego króla i każe synowi",
      dzwiek: "txt4.mp3"
    },
    {
      obraz: "page1.png",
      tekst1: "przysiąc, że zostanie przez niego pomszczony. Zakazuje mu jednak mścić się na matce.",
      tekst2: "",
      dzwiek: "txt5.mp3"
    },
    {
      obraz: "page1.png",
      tekst1: "",
      tekst2: "",
    }

  ]
  return (
    <div id='Akt II' style={{background: "url('tlo3.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full flex justify-center items-center h-full inset-0 hide absolute animate-pojawianie delay-0 opacity-0 overflow-hidden'>
        <div className='bg-radial from-black to-[#161625] w-full h-full absolute animate-zniknij'></div>
        <div className='w-[15%] aspect-3/4 ml-30 absolute left-0 bottom-[-1%]' style={{width: "min(21vw, 28vh)"}}>
    <img src="hamlet1.png" className='object-cover absolute object-center w-full' alt="" />
    <img src="hamlet3.png" className='object-cover animate-mruga absolute object-center w-full' alt="" />
    <img src="hamlet2.png" className='object-cover animate-reka absolute object-center w-full origin-[41%_63%]' alt="" />
    
        </div>
<Ksiazka dane={dane} />
        

<Powrot id='Akt II' />
    </div>
  )
}

export default Akt2