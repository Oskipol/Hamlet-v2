import React, { useRef, useEffect } from "react";
import Powrot from "./Powrot";
import Ksiazka from "./Ksiazka";
import { useAtom } from "jotai";
import { VolumeAtom } from "../atoms/VolumeAtom";
import { dane } from "./book";

const IMG_W = 1536;
const IMG_H = 864;
const DOOR_X_PX = 900;
const DOOR_Y_PX = 600;

const Problematyka = () => {
  const [volume] = useAtom(VolumeAtom);
  const volumeRef = useRef(volume);
  const doorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [ksiega, setKsiega] = React.useState(0);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  const addTimeout = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
    return id;
  };

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const calcOrigin = () => {
    const wrapper = doorRef.current;
    if (!wrapper) return;
    const divW = wrapper.offsetWidth;
    const divH = wrapper.offsetHeight;
    const scale = Math.max(divW / IMG_W, divH / IMG_H);
    const offsetX = (IMG_W * scale - divW) / 2;
    const offsetY = (IMG_H * scale - divH) / 2;
    const x = (DOOR_X_PX * scale - offsetX) / divW * 100;
    const y = (DOOR_Y_PX * scale - offsetY) / divH * 100;
    wrapper.style.transformOrigin = `${x}% ${y}%`;
  };

  const startZoom = () => {
    calcOrigin();
    const wrapper = doorRef.current;
    if (!wrapper) return;
    wrapper.style.transition = "transform 4s ease-in";
    wrapper.style.transform = "scale(4)";
  };

  useEffect(() => {
    const wrapper = doorRef.current;
    if (!wrapper) return;
    const resizeObserver = new ResizeObserver(() => calcOrigin());
    resizeObserver.observe(wrapper);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const element = containerRef.current;
          if (element && !element.classList.contains("hide")) {
            clearAllTimeouts();

            const wrapper = doorRef.current;
            if (wrapper) {
              wrapper.style.transition = "none";
              wrapper.style.transform = "scale(1)";
            }

            const film = document.getElementById("film") as HTMLVideoElement;
            if (film) {
              film.pause();
              film.currentTime = 0;
              film.style.visibility = "hidden";
            }

            addTimeout(() => {
              const door = document.getElementById("drzwi") as HTMLDivElement;
              const film = document.getElementById("film") as HTMLVideoElement;
              const kontener=document.getElementById("kontener") as HTMLDivElement;
              

              if (film) {
                film.currentTime = 0;
                film.style.visibility = "visible";
                film.play().catch(() => {});
              }

              if (audioRef.current && !volumeRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              }

              if (door) {
                door.style.backgroundImage = 'url("/Hamlet/door1.png")';

                addTimeout(() => {
                  if (film) {
                    film.pause();
                    film.style.visibility = "hidden";
                  }
                }, 5500);

                addTimeout(() => {
                  door.style.backgroundImage = 'url("/Hamlet/door.gif")';
                  addTimeout(() => {
                    addTimeout(() => {
                      if(kontener) kontener.style.display="grid";
                    }, 5000);
                    startZoom();
                  }, 1000);
                  
                }, 6000);
                
              }
            }, 50);
          }
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  const koniec2 = () => {
    clearAllTimeouts();

    const wrapper = doorRef.current;
    if (wrapper) {
      wrapper.style.transition = "none";
      wrapper.style.transform = "scale(1)";
      wrapper.style.transformOrigin = "";
    }

    const door = document.getElementById("drzwi") as HTMLDivElement;
    const kontener=document.getElementById("kontener") as HTMLDivElement;
    if(kontener) kontener.style.display="none";
    if (door) door.style.backgroundImage = 'url("/Hamlet/door2.png")';

    const film = document.getElementById("film") as HTMLVideoElement;
    if (film) {
      film.pause();
      film.currentTime = 0;
      film.style.visibility = "hidden";
    }

    audioRef.current?.pause();
    if (audioRef.current) audioRef.current.currentTime = 0;
  };



  return (
    <div
      ref={containerRef}
      id="Problematyka"
      className="w-full h-full absolute hide inset-0 opacity-0 bg-black animate-pojawianie flex justify-center items-center"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        ref={doorRef}
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div
          style={{ background: "url('/Hamlet/dom.gif')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="w-full h-full absolute"
        />
        <div
          style={{ background: "url('/Hamlet/interior.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="w-full h-full absolute"
        />
        <div
          id="drzwi"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          className="w-full h-full absolute brightness-30 contrast-105"
        />
        <video
          id="film"
          muted
          playsInline
          src="/Hamlet/0304.mp4"
          style={{ objectFit: "cover", objectPosition: "center", visibility: "hidden" }}
          className="w-full h-full absolute"
        />
      </div>

      <div
        style={{ background: "url('/Hamlet/in.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        className="absolute opacity-0 animate-pojawianie delay-11000 z-10 w-full h-full"
      />
      <div id="kontener" style={{display: "none"}} className="absolute overflow-y-scroll md:gap-5 gap-3 lg:gap-8 my-[10%] z-10 mx-auto w-[80%] h-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className='w-full items-center h-full flex justify-center'>
          <div className="w-[50%] aspect-4/6 overflow-hidden">
            <img src="/Hamlet/book4.jpg" onClick={()=>setKsiega(1)} className="w-full cursor-pointer h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className='w-full items-center h-full flex justify-center'>
          <div className="w-[50%] aspect-4/6 overflow-hidden">
            <img src="/Hamlet/book5.jpg" onClick={()=>setKsiega(2)} className="w-full cursor-pointer h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className='w-full items-center h-full flex justify-center'>
          <div className="w-[50%] aspect-4/6 overflow-hidden">
            <img src="/Hamlet/book6.jpg" onClick={()=>setKsiega(3)} className="w-full cursor-pointer h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className='w-full items-center h-full flex justify-center'>
          <div className="w-[50%] aspect-4/6 overflow-hidden">
            <img src="/Hamlet/book7.jpg" onClick={()=>setKsiega(4)} className="w-full cursor-pointer h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className='w-full items-center h-full flex justify-center'>
          <div className="w-[50%] aspect-4/6 overflow-hidden">
            <img src="/Hamlet/book8.jpg" onClick={()=>setKsiega(5)} className="w-full cursor-pointer h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className='w-full items-center h-full flex justify-center'>
          <div className="w-[50%] aspect-4/6 overflow-hidden">
            <img src="/Hamlet/book9.jpg" onClick={()=>setKsiega(6)} className="w-full cursor-pointer h-full object-center object-cover" alt="" />
          </div>
        </div>
      </div>
    {ksiega!==0&&(
      <div className='w-full h-full z-50 flex justify-center items-center absolute'>
          <Ksiazka dane={dane[ksiega-1]}/>
          <div onClick={()=>setKsiega(0)} className="w-full h-full absolute z-0"></div>
      </div>
    )}
      <Powrot id="Problematyka" onPowrot={koniec2} />
      <audio ref={audioRef} src="/Hamlet/mom.mp3" />
    </div>
  );
};

export default Problematyka;