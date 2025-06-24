import { TTask } from '../types'
import { atom } from 'jotai/index'

const exampleTask: TTask[] = [
  {
    id: 'xWed',
    title: 'Tasks',
    tags: ['Strategy', 'Low'],
    date: '16m ago',
    status: 'In Progress',
    unfolded: false
  }
]

export const taskOrganiserAtom = atom<TTask[]>(exampleTask)

export const taskAtomById = (taskId: string) =>
  atom(
    (get) => get(taskOrganiserAtom).find((t) => t.id === taskId),
    (get, set, newTask: TTask) => {
      const tasks = get(taskOrganiserAtom)
      const nextTasks = tasks.map((t) => (t.id === taskId ? newTask : t))
      set(taskOrganiserAtom, nextTasks)
    }
  )
