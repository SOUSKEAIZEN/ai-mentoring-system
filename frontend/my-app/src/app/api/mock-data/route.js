import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate network latency for realism during the demo
  await new Promise((resolve) => setTimeout(resolve, 800));

  const mockDatabase = {
    currentUser: { 
      id: '1', 
      name: 'Alex (Mentee)', 
      role: 'mentee',
      track: 'Computer Science & Engineering'
    },
    recommendedMentors: [
      { id: 'm1', name: 'Dr. Sarah Jenkins', title: 'Senior Software Engineer', tags: ['React', 'System Design'] },
      { id: 'm2', name: 'James Chen', title: 'Blockchain Architect', tags: ['Solidity', 'Web3', 'Smart Contracts'] },
      { id: 'm3', name: 'Maria Garcia', title: 'AI Researcher', tags: ['Python', 'Machine Learning'] }
    ],
    upcomingSessions: [
      { id: 's1', mentorName: 'Dr. Sarah Jenkins', date: 'Tomorrow, 10:00 AM', topic: 'System Architecture Review' }
    ]
  };

  return NextResponse.json(mockDatabase);
}