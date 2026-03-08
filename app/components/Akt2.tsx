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
      tekst1: "Kanclerz wysyła za synem Laertesem szpiega. Ma śledzić jego poczynania. Uczy sługę Reynalda wykrętnych sposobów zdobywania wiadomości o sprawkach syna. Przybywa Ofelia, zawiadamiając o dziwnym wyglądzie i zachowaniu Hamleta. Poloniusz podejrzewa, że oszalał z miłości, odtrącony przez Ofelię.",
      tekst2: "Postanawia zawiadomić króla. By zbadać powody smutku Hamleta i zabawić go, wezwano jego przyjaciół z dzieciństwa - Rosencrantza i Guildensterna. Poloniusz przynosi nowinę o powrocie posłów z Norwegii i odkryciu powodu szaleństwa Hamleta.",
      dzwiek: "txt6.mp3"
    },
    {
      obraz: "page1.png",
      tekst1: "Posłowie przekazują dobre wieści. Młody Fortynbras przysiągł nie niepokoić Danii, chce tylko przejść przez jej terytorium w drodze do Polski. Kanclerz prezentuje list Hamleta do Ofelii z wyznaniem miłości. Opowiada o swym zakazie i jego konsekwencjach w postaci niemocy Hamleta.",
      tekst2: "Królewicz właśnie się zbliża. Poloniusz postanawia z nim porozmawiać. Hamlet kpi z niego. Udaje, że go nie poznaje. Nazywa go stręczycielem. Zjawiają się Rosencrantz i Guildenstern. W błyskotliwej rozmowie z nimi Hamlet określa Danię mianem więzienia.",
      dzwiek: "txt7.mp3"
    },
    {
      obraz: "page1.png",
      tekst1: "Zmusza ich do wyznania, że zostali sprowadzeni w tym celu, by zdobyć wiadomości o powodzie dziwnego zachowania przyjaciela. Przynoszą wieść o rychłym przybyciu trupy aktorów. Wchodzą aktorzy. Jeden deklamuje fragment sztuki o wojnie trojańskiej.",
      tekst2: "Królewicz prosi, by nazajutrz zagrali sztukę “Morderstwo Gonzagi” z krótkim dodatkowym tekstem swego autorstwa. Chce w ten sposób zdemaskować Klaudiusza. Wyrzuca sobie opieszałość w spełnieniu zemsty.",
      dzwiek: "txt8.mp3"
    },
    {
      obraz: "page1.png",
      tekst1: "",
      tekst2: "",
      dzwiek: "txt9.mp3"
    }

  ];
  return (
    <div id='Akt II' style={{background: "url('tlo3.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full flex justify-center items-center h-full inset-0 hide absolute animate-pojawianie delay-0 opacity-0 overflow-hidden'>
        <div className='absolute w-full h-full bg-black animate-nieMa z-50'></div>
        <div className='bg-radial aspect-square via-[#2b0202] from-black to-[#120000] opacity-0 z-51 w-[300%] absolute animate-nieMa'></div>
        <div className='bg-radial aspect-square via-[#2b0202] from-black to-[#120000] opacity-0 z-52 w-full animate-nieMa2 absolute '></div>
        <div className='bg-radial aspect-square via-[#2b0202] from-black to-[#120000] opacity-0 z-52 w-[200%] animate-nieMa2 absolute '></div>
        <div className='w-[15%] aspect-3/4 ml-30 opacity-0 animate-pojawianie absolute delay-4000 duration-1000 left-0 bottom-[-1%]' style={{width: "min(21vw, 28vh)"}}>
    <img src="hamlet1.png" className='object-cover absolute object-center w-full' alt="" />
    <img src="hamlet3.png" className='object-cover animate-mruga absolute object-center w-full' alt="" />
    <img src="hamlet2.png" className='object-cover animate-reka absolute object-center w-full origin-[41%_63%]' alt="" />
    
        </div>
        <div className='animate-wDol delay-3000'>
<Ksiazka dane={dane} />
        </div>

<Powrot id='Akt II' />
    </div>
  )
}

export default Akt2