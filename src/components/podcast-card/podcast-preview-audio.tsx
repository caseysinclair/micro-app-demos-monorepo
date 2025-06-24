import React, { useEffect, useRef } from 'react'
import { useHover } from '@uidotdev/usehooks'
import { PodcastSoundWaves } from './podcast-sound-waves'

interface PodcastCardProps {
  onPlay?: () => void
}

export const PodcastPreviewAudio: React.FC<PodcastCardProps> = ({ onPlay }) => {
  const [ref, hovering] = useHover()
  const [isPlaying, setIsPlaying] = React.useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!hovering) setTimeout(() => setIsPlaying(false), 500)
  }, [hovering])

  const handlePreview = () => {
    setIsPlaying(!isPlaying)

    if (!audioRef.current) {
      audioRef.current = new Audio('')
      audioRef.current.play()
    } else if (!audioRef.current.paused) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0 // Reset to start
    } else {
      audioRef.current.play()
    }

    // Callback
    onPlay?.()
  }

  return (
    <button
      ref={ref}
      onClick={() => {
        handlePreview()
      }}
      aria-label="Preview Episode"
      className={`flex items-center rounded-2xl bg-black/40 p-2 text-xs text-white transition-transform hover:scale-105`}
    >
      {!isPlaying ? (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-1 inline-block size-4"
        >
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
          <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-1 inline-block size-4"
        >
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
        </svg>
      )}
      <span className={`${isPlaying ? 'animate-pulse' : ''}`}>
        Preview Episode
      </span>
    </button>
  )
}
