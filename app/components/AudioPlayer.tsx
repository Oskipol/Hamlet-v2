'use client'

import { div } from 'motion/react-client'
import { use, useEffect, useState } from 'react'

const AudioPlayer = () => {
  const [mute, setMute]=useState(false);
  
  useEffect(() => {
    const audio = document.getElementById('muza') as HTMLAudioElement | null
    audio?.play();
      const timer=setTimeout(() => {
        const kkk = document.getElementById('kkk') as HTMLAudioElement | null
        kkk?.play();
    }, 5000);


  }, [])
  useEffect(()=>{
    const audio=document.getElementById('muza') as HTMLAudioElement | null;
    if(audio){
      if(mute){
        audio.muted=true;
      }else{
        audio.muted=false;
      }
    }
  }, [mute])
  return (
    <div>
    <img className='w-[10%] z-1000 aspect-square absolute p-2 hover:cursor-pointer lg:-top-[4%] md:top-0 left-0 top-0 md:left-0 lg:-left-[2%] bg-[rgba(255,255,255,0.3)] scale-60 md:scale-50 lg:scale-30' src={mute?"mute.png":"unmute.png"} onClick={()=>{mute?setMute(false):setMute(true)}} alt="" />
    <audio id='muza' loop src="/ES_Shadowman's Waltz - Franz Gordon.mp3" />
    <audio id='kkk' src="/Hamlet.mp3" />
    </div>
  )
}

export default AudioPlayer