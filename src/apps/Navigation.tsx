import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm p-5 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          <Link
            to="/podcast-card"
            className="rounded-lg bg-neutral-800 px-3 py-2 text-sm"
          >
            Podcast Card
          </Link>
          <Link
            to="/task-organiser"
            className="rounded-lg px-3 py-2 text-sm bg-neutral-800"
          >
            Task Organiser
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
