import { useState, useEffect } from 'react'

export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url))
  const [isPlaying, setIsPlaying] = useState(false)

  const play = (pointOfTimeInSeconds: number) => {
    audio.play()
    audio.currentTime = pointOfTimeInSeconds

    setIsPlaying(true)
  }

  const fadeOut = (duration: number = 500) =>
    new Promise<void>((resolve) => {
      const steps = 20
      const step = audio.volume / steps
      const interval = setInterval(() => {
        if (audio.volume > step) {
          audio.volume -= step
        } else {
          clearInterval(interval)
          audio.pause()
          audio.volume = 1
          setIsPlaying(false)
          resolve()
        }
      }, duration / steps)
    })

  const stop = () => {
    if (isPlaying) {
      fadeOut().then(() => {
        audio.currentTime = 0
      })
    }
  }

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false))
      audio.pause()
    }
  }, [audio])

  return { isPlaying, play, stop }
}
