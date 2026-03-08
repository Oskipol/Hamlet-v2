import { get } from 'http';
import React from 'react'

interface Dane {
    [key: string]: string | undefined;
}
interface KsiazkaProps {
    dane: Dane[];
}

const Ksiazka = ({ dane }: KsiazkaProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [flipCount, setFlipCount] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [chwila, setChwila] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [animatingPage, setAnimatingPage] = React.useState<number | null>(null);
  const [animationDir, setAnimationDir] = React.useState<'flip' | 'unflip'>('flip');
  const [closingAll, setClosingAll] = React.useState(false);
  const [isSpread, setIsSpread] = React.useState(true);
  const [kolor, setKolor]=React.useState('#252525');

  const handleClick = () => {
    const bookOpenAudio = document.getElementById('bookOpen') as HTMLAudioElement;
    const bookCloseAudio = document.getElementById('bookClose') as HTMLAudioElement;
    if (animatingPage !== null || closingAll) return;

    if (chwila) {
      if (currentPage > 0) {
        const playPageFlip = () => {
  const sfx = new Audio('/page-flip.mp3');
  var promisePlaying = sfx.play();
  if (promisePlaying !== undefined) {
    promisePlaying.then(_ => {
    }).catch(error => {
    });
  }
};
        setClosingAll(true);
        const stagger = 200;
        for(let i=currentPage; i>0; i--){
          setTimeout(()=>{
            playPageFlip();
          }, (currentPage - i) * 100);
        }
        const totalTime = (currentPage - 1) * stagger + 500;
        setTimeout(() => {
          bookCloseAudio.currentTime = 0;
          bookCloseAudio.play();
          setIsSpread(false)
          setClosingAll(false);
          setCurrentPage(0);
          setIsAnimating(true);
          setIsFlipped(false);
          setFlipCount(prev => prev + 1);
          setChwila(false);
        }, totalTime);
      } else {
        bookCloseAudio.currentTime = 0;
        bookCloseAudio.play();
        setIsSpread(false);
        setIsAnimating(true);
        setIsFlipped(false);
        setFlipCount(prev => prev + 1);
        setChwila(false);
      }
    } else {
      bookOpenAudio.currentTime = 0;
      bookOpenAudio.play();
      setIsSpread(false);
      setIsAnimating(true);
      setIsFlipped(true);
      setFlipCount(prev => prev + 1);
      setTimeout(() => setChwila(true), 500);
    }
  };

  const handlePage = (index: number) => {
    const pageFlipAudio = document.getElementById('pageFlip') as HTMLAudioElement;
    if (animatingPage !== null || closingAll) return;

    if (index > currentPage) {
      pageFlipAudio.currentTime = 0;
      pageFlipAudio.play();
      const pageToFlip = currentPage + 1;
      setAnimatingPage(pageToFlip);
      setAnimationDir('flip');
      setTimeout(() => {
        setCurrentPage(pageToFlip);    
      }, 400);
      setTimeout(() => {
        setAnimatingPage(null);
      }, 800);
    } else if (index <= currentPage && currentPage > 0) {
      pageFlipAudio.currentTime = 0;
      pageFlipAudio.play();
      setAnimatingPage(currentPage);
      setAnimationDir('unflip');
      setTimeout(() => {
        setCurrentPage(prev => prev - 1); 
      }, 400);
      setTimeout(() => {
        setAnimatingPage(null);
      }, 800);
    }
  };

  const getPageZIndex = (index: number) => {
    if (!chwila) return dane.length - index; 
    if (closingAll && index <= currentPage) return 20 + index;
    if (animatingPage === index) return 30;
    if (index <= currentPage) return 15 + index;
    return 20 + (dane.length - index);
  };

  const getPageAnimation = (index: number) => {
    if (closingAll && index <= currentPage) return 'animate-unflip';
    if (animatingPage === index) return animationDir === 'flip' ? 'animate-flip' : 'animate-unflip';
    return '';
  };

  const getPageStyle = (index: number) => {
    const base: React.CSSProperties = {
      width: (isFlipped&&!isSpread)?!(index<=currentPage)?92 + (index * 1.5) + "%":100-(index*1.5)+"%":"98%",
      transformOrigin: 'left center',
      transformStyle: 'preserve-3d',
      zIndex: getPageZIndex(index),
    };
    base.transition="width 0.5s ease";
    base.transitionDelay = `${index * 100}ms`;

    const isPageFlipped =
      (closingAll && index <= currentPage) ||
      (animatingPage !== index && index <= currentPage) ||
      (animatingPage === index && animationDir === 'unflip');

    if (isPageFlipped) {
      base.transform = 'rotateY(-179deg)';
    }

    if (closingAll && index <= currentPage) {
      base.animationDelay = `${(currentPage - index) * 150}ms`;
    }

    return base;
  };
  const PlaytTekst = (nazwa: string | undefined) => () => {
    if (!nazwa) return;
    
    if (activeAudio.current) {
      activeAudio.current.pause();
      activeAudio.current.currentTime = 0;
      activeAudio.current = null;
      return;
    }
    
    const audio = new Audio(nazwa);
    activeAudio.current = audio;
    audio.addEventListener('ended', () => {
      activeAudio.current = null;
    });
    const audioPlay = audio.play();
    if (audioPlay !== undefined) {
      audioPlay.then(_ => {
      }).catch(error => {
      });
    }
  };

  const activeAudio = React.useRef<HTMLAudioElement | null>(null);

  return (
    <div className='relative ml-[30%] aspect-4/6 z-10' style={{ perspective: '3000px', width: 'min(34vw, 51vh)', containerType: "inline-size" }}>
      <div style={{background: kolor}} className='w-full h-full absolute left-0 top-0 rounded-r-sm'></div>
      <div className='bg-gray-500 w-[2%] h-full absolute z-11 left-[0%] top-0'></div>
      {dane.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              style={getPageStyle(index)}
              className={`h-[97%] overflow-hidden absolute ${getPageAnimation(index)} top-[50%] left-0 strony translate-y-[-50%] bg-amber-50 rounded-r-2xl border-amber-50 border-r-2`}
            >
              <img
                src={item.obraz}
                className='object-cover relative h-full rounded-r-2xl cursor-pointer'
                onClick={() => handlePage(index)}
                alt=""
              />
              {index === currentPage + 1 && (
                <div onClick={PlaytTekst(item.dzwiek)} className='absolute m-5 cursor-pointer rounded-[50%] w-[20%] aspect-square right-0 z-40 object-cover bottom-0'>
                <img src="button.png" alt="" />
              </div>
              )}
              <div className='absolute bg-amber-100 opacity-30 blur-2xl w-[70%] h-[80%] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'></div>
              <p style={{transform: `rotateY(${index <= currentPage ? 180 : 0}deg)`, fontSize: '5.5cqi'}} className='absolute font-playfair w-[70%] h-[80%] top-[56%] translate-y-[-50%] overflow-y-scroll overflow-x-hidden text-black left-[50%] translate-x-[-50%] text-center'>
                {index<=currentPage ? item.tekst2 : item.tekst1}
              </p>
            </div>
          )}

          {index === 0 && (
            <div
              key={flipCount}
              onClick={handleClick}
              className={`${isAnimating ? (isFlipped ? "animate-flip" : "animate-unflip") : ""} w-full h-full relative z-12 hover:cursor-pointer`}
              style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
            >
              <img
                src={item.obraz}
                onClick={()=>{setKolor(item.kolor?item.kolor:"")}}
                className='w-full h-full absolute inset-0'
                style={{ backfaceVisibility: 'hidden' }}
                alt=""
              />
              <div
                className={`w-full h-full absolute inset-0 rounded-r-sm shadow-inner flex items-center justify-center`}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: item.kolor }}
              >
                <div className='w-[90%] h-[95%] border border-gray-500 rounded-sm'></div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      <audio id='bookClose' src="book-close.mp3"></audio>
      <audio id='bookOpen' src="book-open.mp3"></audio>
      <audio id='pageFlip' src="page-flip.mp3"></audio>
    </div>
  );
};

export default Ksiazka;