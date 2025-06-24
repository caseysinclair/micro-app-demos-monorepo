import React, { useRef } from 'react'

import { v4 as uuid4 } from 'uuid'

import { useAtom } from 'jotai/react'
import { taskItemAtom } from '../atoms'

import { TTaskId } from '../types'

export const TaskItemAdd: React.FC<{ taskId: TTaskId }> = ({ taskId }) => {
  const [items, setItem] = useAtom(taskItemAtom)

  const inputTitleRef = useRef<HTMLInputElement>(null)

  const addItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!inputTitleRef.current?.value) {
      return
    }

    setItem([
      ...items,
      {
        id: uuid4(),
        taskId: taskId,
        title: inputTitleRef.current.value,
        completed: false
      }
    ])

    inputTitleRef.current.value = ''
    inputTitleRef.current.focus()
  }

  return (
    <form onSubmit={addItem} aria-label="Add a new todo">
      <div className={`flex flex-col transition-all`}>
        <div className="flex flex-col gap-2 px-2 " data-id="task-body">
          <div className="py-2">
            <label htmlFor="task-title" className="sr-only">
              Todo title
            </label>
            <input
              id="task-title"
              type="text"
              placeholder="What needs to be done? (Press Enter to add)"
              ref={inputTitleRef}
              autoFocus
              aria-label="Todo title"
              className="w-full rounded-lg border border-gray-300 p-4 py-3 shadow-sm transition-all duration-300 placeholder:text-sm placeholder:italic focus:scale-125 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>
      </div>
    </form>
  )
}
