import './App.css'
import BentoCard from './components/BentoCard'
function App() {
  return (
    <div className=" text-white font-sans">
      <div className="mx-auto max-w-5xl">

        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px]">
          
          {/* Use the component with custom spans */}
          <BentoCard className="md:col-span-2 md:row-span-2 justify-end">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-neutral-400 mt-2">Product Designer based in 2025.</p>
          </BentoCard>

          <BentoCard className="bg-blue-600 border-none items-center justify-center">
            <span className="font-bold text-lg">Twitter</span>
          </BentoCard>

          <BentoCard className="md:col-span-2 justify-center">
             <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Project</span>
             <p className="text-lg font-medium">Web-Portfolio 2025</p>
          </BentoCard>

          <BentoCard className="md:row-span-2">
            <h3 className="font-bold mb-4">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TS', 'Tailwind', 'Bun'].map(item => (
                <span key={item} className="px-3 py-1 bg-neutral-800 rounded-full text-xs">
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="items-center justify-center text-3xl">
            🎨
          </BentoCard>
          
        </div>
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight">Portfolio.</h1>
        </header>
      </div>
    </div>
  )
}

export default App