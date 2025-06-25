import React, { useEffect, useState } from 'react'
import { useHover, useMediaQuery } from '@uidotdev/usehooks'
import { PodcastSoundWaves } from './podcast-sound-waves'

import foxBearImg from '../../assets/fox-bear-cover.png'

// This component is inspired by Spotify Podcast list within their Desktop app.

interface PodcastCardProps {
  heading: string
  subheading: string
  image: string
  description: string
  date: string
  duration: string
}

export const PodcastCardView = () => {
  return (
    <>
      <PodcastCard
        heading="Ep.01: Tails from the Everglades"
        subheading="Fox and the bear podcast"
        image={foxBearImg}
        description="They met again, under a glowing moon. Luna taught Bear the secret paths. Bear shared with Luna the wisdom of storms. Together, they uncovered the Everglades’ mysteries."
        date="June 30, 2024"
        duration="1 hr"
      />
    </>
  )
}

export const PodcastCard: React.FC<PodcastCardProps> = ({
  heading,
  subheading,
  image,
  description,
  date,
  duration
}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const [ref, isHovering] = useHover()

  const isMobile = useMediaQuery('only screen and (max-width : 768px)')

  useEffect(() => {
    // Fade out the sound waves when the card is not hovered
    if (!isHovering) setTimeout(() => setIsPlaying(false), 300)
  }, [isHovering])

  const isCardExpanded = isHovering || isMobile // Always show expanded card on mobile

  return (
    <article
      ref={ref}
      className="flex h-[630px] w-full max-w-md overflow-hidden rounded-lg bg-gradient-to-br from-[#ac0406] to-[#6f0102] p-6"
    >
      <div className="flex w-full flex-col">
        {/* Podcast Header */}
        <header className="mb-8 text-left">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white">
            {heading}
          </h1>
          <p className="text-sm text-white">
            <span className="text-white/70">Episode • </span>
            {subheading}
          </p>
        </header>

        {/* Podcast Image */}
        <div className="relative mb-4 ">
          <div
            className={`absolute overflow-x-hidden transition-opacity duration-300 ease-in-out ${
              isCardExpanded && isPlaying ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <PodcastSoundWaves />
          </div>

          <div
            className={`relative mx-auto mb-4 flex w-60 flex-col transition-all duration-500 ease-in-out ${
              isCardExpanded ? 'md:w-60' : 'md:h-auto md:w-80'
            }`}
            data-id="episode-image"
          >
            <div className="aspect-square overflow-hidden rounded-md shadow-[0_1px_19px_6px_rgb(0,0,0,0.25)]">
              <img
                src={image}
                alt="Fox and the bear podcast cover"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Podcast Info */}
        <section className="mb-8" data-id="episode-info">
          <p className="text-sm leading-relaxed text-white/70">
            <span className="text-white">
              {date} • {duration} •{' '}
            </span>
            {description}
          </p>
        </section>

        {/* Podcast Player */}
        <div
          className={`flex place-content-center items-center gap-4 transition-all duration-300 ease-in-out ${
            isCardExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label="Preview Episode"
            className={`flex items-center rounded-2xl bg-black/40 p-2 text-xs text-white hover:scale-105`}
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
        </div>
      </div>
    </article>
  )
}
