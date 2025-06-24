import React, { useEffect, useState } from 'react'

type SoundWaveProps = {
  bars?: number // Number of bars in the wave
  width?: number // Width of the SVG
  height?: number // Maximum height of the SVG
  color?: string // Colour of the bars
  speed?: number // Animation update interval (ms)
}

export const PodcastSoundWaves: React.FC<SoundWaveProps> = ({
  bars = 50,
  width = 610,
  height = 160,
  color = '#fff',
  speed = 120
}) => {
  const [levels, setLevels] = useState<number[]>(() =>
    Array(bars).fill(height * 1.5)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setLevels(Array.from({ length: bars }, () => Math.random() * height))
    }, speed)
    return () => clearInterval(interval)
  }, [bars, height, speed])

  const barWidth = width / (bars * 1.5)
  const heightOffset = 50

  return (
    <svg
      width={width}
      height={height + heightOffset}
      style={{ display: 'block' }}
    >
      {levels.map((lvl, idx) => (
        <rect
          key={idx}
          x={idx * barWidth}
          y={height - lvl}
          width={barWidth / 3}
          height={lvl}
          rx={barWidth / 2}
          fill={color}
          style={{
            transition: 'height 0.5s, y 0.8s'
          }}
        />
      ))}
    </svg>
  )
}
