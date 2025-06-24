import React from 'react'

export const TaskProgressBar = ({
  itemsCompleted,
  itemCount
}: {
  itemsCompleted: number
  itemCount: number
}) => {
  const percent =
    itemCount > 0
      ? Math.min(100, Math.max(0, (itemsCompleted / itemCount) * 100))
      : 0
  return (
    <div className={`${itemsCompleted === itemCount ? 'animate-pop' : ''}`}>
      <div
        className="h-[9px] w-12 overflow-hidden rounded-full border border-gray-400 bg-gray-100 shadow"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-label="Task completion"
        tabIndex={1}
      >
        <div
          className="h-full rounded-sm bg-green-500  transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
        <span className="sr-only">{percent}% complete</span>
      </div>
    </div>
  )
}
