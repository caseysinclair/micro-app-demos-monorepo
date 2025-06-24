import React from 'react'

import { useAtomValue } from 'jotai/react'
import { taskItemByIdAtom, taskItemsByTaskAtom } from '../atoms'
import { TaskItem } from './task-item'

import type { TTaskId } from '../types'

export const TaskItemView: React.FC<{ taskId: TTaskId }> = ({ taskId }) => {
  const items = useAtomValue(taskItemsByTaskAtom(taskId))

  return items.map((task) => (
    <TaskItem atom={taskItemByIdAtom(task.id)} key={task.id} />
  ))
}
