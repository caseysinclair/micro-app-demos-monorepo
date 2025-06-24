import { atom } from 'jotai/index'
import { atomFamily, selectAtom } from 'jotai/utils'
import { TTaskItem } from '../types'

const exampleItems: TTaskItem[] = [
  {
    id: '1',
    taskId: 'xWed', // Foreign key in Task
    title: 'Add slide deck to presentation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: true
  },
  {
    id: '2',
    taskId: 'xWed',
    title: 'Organise meeting to review plan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: false
  },
  {
    id: '3',
    taskId: 'xWed',
    title: 'Check in with client around deadline',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: false
  },
  {
    id: '4',
    taskId: 'xWed',
    title: 'Contact media outlets',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: false
  }
]

export const taskItemAtom = atom<TTaskItem[]>(exampleItems)

// Task items filtered by taskId
export const taskItemsByTaskAtom = atomFamily((taskId: string) =>
  selectAtom(taskItemAtom, (items) => items.filter((t) => t.taskId === taskId))
)

// Single task item by id with read/write capability
export const taskItemByIdAtom = atomFamily((taskId: string) =>
  atom(
    (get) => get(taskItemAtom).find((t) => t.id === taskId),
    (get, set, newTask: TTaskItem) => {
      set(taskItemAtom, (prev) =>
        prev.map((t) => (t.id === taskId ? newTask : t))
      )
    }
  )
)

// Count of task items
export const taskItemCountAtom = atomFamily((taskId?: string) =>
  selectAtom(
    taskItemAtom,
    (items) => items.filter((t) => t.taskId === taskId).length
  )
)

export const taskItemCompletedAtom = atomFamily((taskId?: string) =>
  selectAtom(
    taskItemAtom,
    (items) => items.filter((t) => t.taskId === taskId && t.completed).length
  )
)

export const deleteTaskItemAtom = atom(null, (get, set, itemId: string) => {
  set(taskItemAtom, (prev) => prev.filter((item) => item.id !== itemId))
})
