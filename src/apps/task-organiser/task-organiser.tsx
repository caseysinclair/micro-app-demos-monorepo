import React from 'react'
import { Provider, useAtomValue } from 'jotai'

import { Task } from './components/task'
import { TaskItemView } from './components/task-item-view'

import { taskOrganiserAtom, taskAtomById } from './atoms'

export const TaskOrganiser: React.FC = () => {
  const tasksAtom = useAtomValue(taskOrganiserAtom)

  return (
    <Provider>
      <div className="" data-id="task-organiser">
        {tasksAtom.map((task) => (
          <div
            key={task.id}
            className="flex flex-col gap-4 rounded-2xl  bg-white p-4 shadow-[1px_1px_1px_1px_#0000000f] md:w-[450px]"
            data-id="task"
          >
            <Task atom={taskAtomById(task.id)} />
            <TaskItemView taskId={task.id} />
          </div>
        ))}
      </div>
    </Provider>
  )
}
