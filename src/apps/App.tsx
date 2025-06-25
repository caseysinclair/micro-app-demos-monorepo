import React, { Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './Navigation'

import { PodcastCardView } from './podcast-card/podcast-card'
import { TaskOrganiser } from './task-organiser/task-organiser'

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-100 text-white">
        <Navigation />
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center ">
              <div className="size-8 animate-spin rounded-full border-4 border-neutral-300 border-t-blue-600"></div>
            </div>
          }
        />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/podcast-card" element={<PodcastCardView />} />
              <Route path="/task-organiser" element={<TaskOrganiser />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
