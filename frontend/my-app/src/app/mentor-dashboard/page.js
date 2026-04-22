'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MentorDashboard() {
  // Using local state to make the Accept/Decline buttons actually do something during the demo
  const [requests, setRequests] = useState([
    { id: 'req1', name: 'Alex', track: 'Computer Science & Engineering', goal: 'Learn System Design', status: 'pending' },
    { id: 'req2', name: 'Jordan', track: 'Web Development', goal: 'Frontend Architecture', status: 'pending' }
  ]);

  const handleRequest = (id, action) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: action } : req
    ));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Mentor Portal</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Dr. Sarah Jenkins • Senior Software Engineer</p>
          </div>
          <Link href="/" className="text-zinc-500 hover:text-black dark:hover:text-white transition font-medium">
            Log Out
          </Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Pending Requests */}
          <section className="md:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">Incoming Mentee Requests</h2>
            <div className="space-y-4">
              {requests.map(req => (
                <div key={req.id} className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{req.name}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Track: {req.track}</p>
                    <p className="text-sm font-medium mt-2 text-zinc-700 dark:text-zinc-300">Goal: {req.goal}</p>
                  </div>
                  
                  {req.status === 'pending' ? (
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleRequest(req.id, 'accepted')}
                        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium hover:opacity-80 transition"
                      >
                        Accept
                      </button>
                      <button 
                        onClick={() => handleRequest(req.id, 'declined')}
                        className="px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                      >
                        Decline
                      </button>
                    </div>
                  ) : (
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      req.status === 'accepted' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                    </span>
                  )}
                </div>
              ))}
              {requests.length === 0 && (
                <p className="text-zinc-500 italic">No pending requests at this time.</p>
              )}
            </div>
          </section>

          {/* Quick Stats / Upcoming */}
          <section className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
               <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Platform Stats</h2>
               <div className="space-y-3 mt-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Active Mentees</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">AI Tokens Saved</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">12.5k</span>
                  </div>
               </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}