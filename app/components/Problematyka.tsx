import React, { useState, useRef, useEffect } from "react";
import Powrot from "./Powrot";

const IMG_W = 1536;
const IMG_H = 864;
const DOOR_X_PX = 900;
const DOOR_Y_PX = 600;

const Problematyka = () => {
  const [zooming, setZooming] = useState(false);
  const doorRef=useRef<HTMLDivElement>(null);


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
  setZooming(true);
};

  useEffect(() => {
  const wrapper = doorRef.current;
  if (!wrapper) return;

  const resizeObserver = new ResizeObserver(() => {
    calcOrigin();
  });

  resizeObserver.observe(wrapper);
  return () => resizeObserver.disconnect();
}, []);
  const containerRef = useRef<HTMLDivElement>(null);
    const audioRef=useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const element = containerRef.current;
          if (element && !element.classList.contains("hide")) {
            const door = document.getElementById("drzwi") as HTMLDivElement;
            if(audioRef.current){audioRef.current.currentTime=0; audioRef.current.play();}
            if (door) {
              door.style.backgroundImage = 'url("/Hamlet/door1.png")';
            setTimeout(()=>{
              const film=document.getElementById("film") as HTMLVideoElement;
              film.style.display="none";
            },5500);
            setTimeout(() => {
              door.style.backgroundImage = 'url("/Hamlet/door.gif")';
              setTimeout(()=>{
                startZoom();
              },1000)
            }, 6000);
          }}
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);
  const koniec2 = () => {
    const film=document.getElementById("film") as HTMLVideoElement;
    film.currentTime=0;
    film.style.display="flex";
    audioRef.current?.pause();
    const wrapper = doorRef.current;
  if (!wrapper) return;
  wrapper.style.transition = "none";
  wrapper.style.transform = "scale(1)";
    const door = document.getElementById("drzwi") as HTMLDivElement;
    if (door) door.style.backgroundImage = 'url("/Hamlet/door2.png")';
    setZooming(false);
  };

  return (
    <div
      ref={containerRef}
      id="Problematyka"
      className="w-full h-full absolute hide inset-0 opacity-0 bg-black animate-pojawianie flex justify-center items-center"
    >
     <div className="absolute top-0 left-0 w-full h-full" ref={doorRef} style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: zooming ? "scale(4)" : "scale(1)",
          transition: zooming ? "transform 4s ease-in" : "none",
        }}>
       <div
        style={{
          background: "url('/Hamlet/dom.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full absolute"
      ></div>
      <div
        style={{
          background: "url('/Hamlet/interior.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full absolute"
      ></div>
      <div
      id="drzwi"
      style={{backgroundSize: "cover", backgroundPosition: "center"}}
        className="w-full h-full absolute brightness-30 contrast-105"
      />
      <video id="film" muted playsInline autoPlay src="/Hamlet/0304.mp4" className="w-full object-center object-cover h-full absolute"></video>

     </div>
     <div style={{background: "url('/Hamlet/in.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className="absolute opacity-0 animate-pojawianie delay-11000 z-10 w-full h-full"></div>
      <Powrot id="Problematyka" onPowrot={koniec2} />
      <audio ref={audioRef} src="/Hamlet/mom.mp3"></audio>
    </div>
  );
};

export default Problematyka;
