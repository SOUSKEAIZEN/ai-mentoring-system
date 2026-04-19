'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/mock-data')
      .then(res => res.json())
      .then(mockData => {
        setData(mockData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <p className="text-zinc-500 animate-pulse">Loading Platform Data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Welcome back, {data.currentUser.name}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Track: {data.currentUser.track}</p>
          </div>
          <Link href="/ai-chat" className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-medium hover:opacity-80 transition">
            Ask AI Mentor
          </Link>
        </header>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Upcoming Sessions */}
          <section className="md:col-span-1 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">Upcoming Sessions</h2>
            {data.upcomingSessions.map(session => (
              <div key={session.id} className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl mb-3 border border-zinc-100 dark:border-zinc-800">
                <p className="font-medium text-zinc-900 dark:text-white">{session.mentorName}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{session.date}</p>
                <span className="inline-block mt-3 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2.5 py-1 rounded-md">
                  {session.topic}
                </span>
              </div>
            ))}
          </section>

          {/* Mentor Matches */}
          <section className="md:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">Recommended Mentors</h2>
            <div className="space-y-4">
              {data.recommendedMentors.map(mentor => (
                <div key={mentor.id} className="flex justify-between items-center p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{mentor.name}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{mentor.title}</p>
                    <div className="flex gap-2 mt-2">
                      {mentor.tags.map(tag => (
                        <span key={tag} className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                    Request
                  </button>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}