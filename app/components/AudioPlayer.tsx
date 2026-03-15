'use client'

import { div } from 'motion/react-client'
import { use, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { VolumeAtom } from '../atoms/VolumeAtom'

const AudioPlayer = () => {
  const [volume, setVolume] = useAtom(VolumeAtom)

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
      if(volume){
        audio.muted=true;
      }else{
        audio.muted=false;
      }
    }
  }, [volume])
  return (
    <div>
    <img className='w-[10%] z-1000 aspect-square absolute p-2 hover:cursor-pointer lg:-top-[4%] md:top-0 left-0 m-[1%] top-0 md:left-0 lg:-left-[2%] bg-[rgba(255,255,255,0.3)] scale-60 md:scale-50 lg:scale-30' src={volume?"/Hamlet/mute.png":"/Hamlet/unmute.png"} onClick={()=>{volume?setVolume(false):setVolume(true);}} alt="" />
    <audio id='muza' loop src="/Hamlet/ES_Shadowman's Waltz - Franz Gordon.mp3" />
    <audio id='kkk' src="/Hamlet/Hamlet.mp3" />
    </div>
  )
}

export default AudioPlayer