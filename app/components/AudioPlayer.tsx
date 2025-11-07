'use client'

import { div } from 'motion/react-client'
import { use, useEffect } from 'react'

const AudioPlayer = () => {
  useEffect(() => {
    const audio = document.getElementById('muza') as HTMLAudioElement | null
    audio?.play();
      const timer=setTimeout(() => {
        const kkk = document.getElementById('kkk') as HTMLAudioElement | null
        kkk?.play();
    }, 5500);


  }, [])


  return (
    <div>
    <audio id='muza' src="/ES_Shadowman's Waltz - Franz Gordon.mp3" />
    <audio id='kkk' src="/Hamlet.mp3" />
    </div>
  )
}

export default AudioPlayer