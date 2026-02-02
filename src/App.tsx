import { useState } from "react"; // Added missing import
import "./App.css";
import BentoCard from "./components/BentoCard";
import BubbleButton from "./components/BubbleButton";

function App() {
  // Define your tech stack tags here
  const techStack = [
    "React 19",
    "TypeScript",
    "Tailwind v4",
    "Bun",
    "Framer Motion",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans p-6 md:p-12">
      <div className="mx-auto max-w-5xl">
        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px]">
          {/* About Me Card */}
          <BentoCard className="md:col-span-2 md:row-span-2 justify-end">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-neutral-400 mt-2">
              Product Designer based in 2025.
            </p>
          </BentoCard>

          {/* Twitter Card */}
          <BentoCard className="bg-blue-600 border-none items-center justify-center">
            <span className="font-bold text-lg">Twitter</span>
          </BentoCard>

          {/* Project Card */}
          <BentoCard className="md:col-span-2 justify-center">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
              Project
            </span>
            <p className="text-lg font-medium">Web-Portfolio 2025</p>
          </BentoCard>

          {/* Tech Stack Card using BubbleButton */}
          <BentoCard className="md:row-span-2">
            <div className="h-full flex flex-col">
              <h3 className="font-bold mb-4">Stack</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {techStack.map((tag) => (
                  <BubbleButton key={tag}>{tag}</BubbleButton>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Emoji Card */}
          <BentoCard className="items-center justify-center text-3xl">
            🎨
          </BentoCard>
        </div>

        <header className="mt-12">
          <h1 className="text-3xl font-bold tracking-tight">Portfolio.</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
