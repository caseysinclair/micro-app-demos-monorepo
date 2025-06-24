import React from 'react'

import { PodcastCardView } from './podcast-card/podcast-card'
import { TaskOrganiser } from './task-organiser/task-organiser'

function App() {
  return (
    <main className="h-screen bg-stone-100">
      <div className="flex justify-center gap-8 py-20">
        <TaskOrganiser />
      </div>
    </main>
  )
}

export default App
