import React, { useState } from 'react'
import { useAtom, useSetAtom } from 'jotai/react'
import { deleteTaskItemAtom } from '../atoms'
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import type { WritableAtom } from 'jotai/index'
import type { TTaskItem } from '../types'

type TaskItemProps = {
  atom: WritableAtom<TTaskItem | undefined, [TTaskItem], void>
}

export const TaskItem: React.FC<TaskItemProps> = ({ atom }) => {
  const [item, setItem] = useAtom(atom)
  const deleteTaskItem = useSetAtom(deleteTaskItemAtom)

  const [isAnimating, setIsAnimating] = useState(false)

  if (!item) {
    return null
  }

  const toggleCompleted = () => {
    setItem({ ...item, completed: !item.completed })
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500) // Match this with animation duration
  }

  return (
    <div
      className={`flex flex-col rounded-2xl border-2 bg-white p-4 text-gray-900   ${
        item.completed ? 'border-2 border-slate-600 bg-slate-100 ' : ''
      }`}
      role="group"
      aria-label={`Task: ${item.title}`}
    >
      <div
        className="flex flex-row items-center gap-2 px-1"
        data-id="task-body"
      >
        <button
          onClick={toggleCompleted}
          className={`${isAnimating && item.completed ? 'animate-wiggle' : ''}`}
          aria-pressed={item.completed}
          aria-label={`Mark task: ${item.title} as ${
            item.completed ? 'incomplete' : 'completed'
          }`}
          title={`Mark task: ${item.title} as ${
            item.completed ? 'incomplete' : 'completed'
          }`}
        >
          {item.completed ? (
            <CheckCircleIconSolid className="size-6  text-green-500" />
          ) : (
            <CheckCircleIcon className="size-6 text-gray-400 hover:scale-110 hover:text-green-500" />
          )}
        </button>
        <h5 className={`py-2 font-sans`}>
          {item.title}
          {item.completed && <span className="sr-only"> (completed)</span>}
        </h5>
        <div className="ml-auto flex items-center">
          <button
            onClick={() => deleteTaskItem(item?.id)}
            aria-label={`Delete task: ${item.title}`}
            title={`Delete task: ${item.title}`}
          >
            <XCircleIcon
              className="size-6 text-gray-400 hover:scale-110 hover:text-red-500"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
