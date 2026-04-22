import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Platform v1.0 Live Prototype
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Next-Generation <br className="hidden md:block"/> AI Mentoring System
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Accelerate your learning curve. Get matched with industry experts, manage your sessions, and get 24/7 technical guidance from our specialized AI Co-Pilot.
        </p>
      </div>

      {/* Role Selection (Mock Login) */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
        
        {/* Mentee Login Card */}
        <Link href="/dashboard" className="group flex flex-col items-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-black dark:hover:border-white transition shadow-sm hover:shadow-md">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
            🎓
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">I am a Mentee</h2>
          <p className="text-center text-zinc-500 mt-2 text-sm">Find mentors and chat with the AI assistant.</p>
          <span className="mt-6 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium text-sm group-hover:opacity-80 transition">
            Demo Mentee Portal
          </span>
        </Link>

        {/* Mentor Login Card */}
        <Link href="/mentor-dashboard" className="group flex flex-col items-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-black dark:hover:border-white transition shadow-sm hover:shadow-md">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
            💼
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">I am a Mentor</h2>
          <p className="text-center text-zinc-500 mt-2 text-sm">Manage requests, view mentees, and set availability.</p>
          <span className="mt-6 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium text-sm group-hover:opacity-80 transition">
            Demo Mentor Portal
          </span>
        </Link>

      </div>
    </div>
  );
}