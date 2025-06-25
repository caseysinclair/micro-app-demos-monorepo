import { RectangleStackIcon } from '@heroicons/react/24/solid'

import React from 'react'

import { TTask } from '../types'

import { useAtomValue, WritableAtom } from 'jotai'
import { taskItemCompletedAtom, taskItemCountAtom } from '../atoms'
import { TaskProgressBar } from './task-progress-bar'
import { TaskItemAdd } from './task-item-add'

type TaskProps = {
  atom: WritableAtom<TTask | undefined, [TTask], void>
}

export const Task: React.FC<TaskProps> = ({ atom }) => {
  const task = useAtomValue(atom)

  const itemCount = useAtomValue(taskItemCountAtom(task?.id))
  const itemsCompleted = useAtomValue(taskItemCompletedAtom(task?.id))

  if (!task) return null

  return (
    <div className="flex flex-col gap-4 text-slate-600">
      {/* Task Header */}
      <div
        className="flex items-center justify-end gap-1"
        data-id="task-header"
      >
        <div>
          <TaskProgressBar
            itemCount={itemCount}
            itemsCompleted={itemsCompleted}
          />
        </div>
      </div>

      {/* Task Title */}
      <div className="flex flex-col items-start gap-2 px-2" data-id="task-body">
        <h3 className="font-serif text-3xl italic ">{task.title}</h3>
      </div>

      {/* Task Footer */}
      <div
        className="flex items-center justify-between gap-2 px-2 pt-1 "
        data-id="task-body"
      >
        <div className="flex items-center gap-2" data-id="task-tags">
          <RectangleStackIcon className="size-5 text-gray-500" />
          <span className="text-xs text-gray-500">{itemCount} • Tasks</span>
        </div>
        <div className="text-[10px] text-gray-500">
          {new Date().toDateString()}
        </div>
      </div>
      <TaskItemAdd taskId={task.id} />
    </div>
  )
}
