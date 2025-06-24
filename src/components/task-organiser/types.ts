export type TTaskId = string

export type TTask = {
  id: TTaskId
  title: string
  tags?: string[]
  date?: string
  status?: string
  unfolded: boolean
}

export type TTaskItem = {
  id: string
  taskId: string
  title: string
  description?: string
  completed: boolean
}
