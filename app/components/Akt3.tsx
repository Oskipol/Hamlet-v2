import React from 'react'
import Powrot from './Powrot'
import Ksiazka from './Ksiazka'

const Akt3 = () => {
  const dane = [
    {
      obraz: "/Hamlet/book3.jpg",
      tekst1: "",
      tekst2: "",
      kolor: "#060606"
    },
    {
      obraz: "/Hamlet/page2.png",
      tekst1: "Świetną okazją do uzyskania poszlak zbrodni okazuje się przyjazd do zamku aktorów (znajomych Hamleta). Hamlet prosi o wystawienie Zabójstwa Gonzagi, ale przerabia treść sztuki tak, aby przypominała ona zamordowanie króla Hamleta.",
      tekst2: "Klaudiusz widząc, że aktorzy odgrywają spektakl przypominający jego własną zbrodnię, unosi się gniewem i wychodzi. Widzi to zarówno Hamlet, jak i poproszony o obserwowanie króla Horacy. Hamlet uzyskuje więc poszukiwaną poszlakę, jednak równocześnie demaskuje się –",
      dzwiek: "/Hamlet/txt10.mp3"
    },
    {
      obraz: "/Hamlet/page2.png",
      tekst1: "Klaudiusz już wie, że Hamlet zna prawdę o jego zbrodni. Hamlet ma możliwość zabicia króla w czasie modlitwy, nie czyni jednak tego tłumacząc się, iż gdyby zabił modlącego się, ten mógłby zamiast do piekła trafić do nieba. Królowa spotyka się z synem i próbuje czynić mu wymówki.",
      tekst2: "Ten oskarża ją o zdradę ojca i jego pamięci. W czasie rozmowy zabija ukrytego za kotarą Poloniusza, mając przez chwilę nadzieję, że to Klaudiusz. W czasie burzliwej rozmowy Hamleta z matką pojawia się Duch przypominając, że Hamlet przysiągł nie mścić się na niej.",
      dzwiek: "/Hamlet/txt11.mp3"
    },
    {
      obraz: "/Hamlet/page2.png",
      tekst1: "Ducha widzi tylko Hamlet, co sprawia, że matka bierze rozmowę między Hamletem a duchem za kolejny dowód szaleństwa syna. Hamlet uspokoiwszy się ukrywa ciało Poloniusza.",
      tekst2: "",
      dzwiek: "/Hamlet/txt12.mp3"
    },
    {
      obraz: "/Hamlet/page2.png",
      tekst1: "",
      tekst2: "",
      dzwiek: ""
    }

  ];
  const [mowi, setMowi] = React.useState(false);
  const dym=()=>{
    const cytat=document.querySelectorAll(".cytat") as NodeListOf<HTMLAudioElement>;
    var randomIndex = Math.floor(Math.random() * 11) + 1;
      var isPlaying = false;
      cytat.forEach((audio) => {
        if (!audio.paused) {
          isPlaying = true;
        }
      });
      if (isPlaying) {
        cytat.forEach((audio) => { 
          audio.pause();
          setMowi(false);
        });
      }
      else{
      setMowi(true);
      setTimeout(() => {setMowi(false)}, cytat[randomIndex-1].duration * 1000);
      cytat[randomIndex-1].currentTime = 0;
      cytat[randomIndex-1].play();
      }
  }
  return (
    <div id='Akt III' style={{background: "url('/Hamlet/stage.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full flex justify-center items-center h-full inset-0 hide absolute animate-pojawianie delay-0 opacity-0 overflow-hidden'>
      <div className='opacity-0 z-2 animate-pojawianie delay-1000'>
        <Ksiazka dane={dane}/>
      </div>
      <div onClick={dym} className='z-1 absolute left-[-2%] bottom-0 opacity-0 cursor-pointer animate-pojawianie delay-1000' style={{width: "min(72vw, 54vh)", aspectRatio: "4/3"}}>
        <img src="/Hamlet/hamlet6.png" className='absolute sharpn inset-0 w-full h-full object-cover' alt="" />
        <img src="/Hamlet/hamlet.gif" className='absolute inset-0 w-full h-full object-cover' style={{opacity: mowi ? 1 : 0}} alt="" />
      </div>
      <Powrot id="Akt III"/>
      <audio className='cytat' src="/Hamlet/c1.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c2.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c3.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c4.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c5.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c6.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c7.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c8.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c9.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c10.mp3"></audio>
      <audio className='cytat' src="/Hamlet/c11.mp3"></audio>
    </div>
  )
}

export default Akt3