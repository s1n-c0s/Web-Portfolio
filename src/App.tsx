import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 p-8 text-white">
      {/* Container */}
      <div className="mx-auto max-w-5xl">

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Card 1: Large Feature (Profile) */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-800 p-8 flex flex-col justify-end border border-neutral-700 hover:border-neutral-500 transition-colors">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-neutral-400">Digital Designer & Developer based in 2025.</p>
          </div>

          {/* Card 2: Small Square (Social) */}
          <div className="rounded-3xl bg-blue-600 p-6 flex items-center justify-center border border-blue-500 hover:scale-95 transition-transform">
            <span className="text-xl font-bold">Twitter</span>
          </div>

          {/* Card 3: Wide (Project) */}
          <div className="md:col-span-2 rounded-3xl bg-neutral-800 p-6 border border-neutral-700">
            <h3 className="font-medium text-neutral-400">Latest Project</h3>
            <p className="text-lg">Web-Portfolio 2025</p>
          </div>

          {/* Card 4: Tall (Skills) */}
          <div className="md:row-span-2 rounded-3xl bg-neutral-800 p-6 border border-neutral-700">
            <h3 className="font-medium mb-4">Stack</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind v4</li>
              <li>Bun</li>
            </ul>
          </div>
          {/* Card 5: Small Square */}
          <div className="rounded-3xl bg-neutral-800 p-6 border border-neutral-700 flex items-center justify-center">
            <span className="text-2xl">🎨</span>
          </div>
        </div>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">About TNK</h1>
        </header>
      </div>
    </div>
  )
}

export default App