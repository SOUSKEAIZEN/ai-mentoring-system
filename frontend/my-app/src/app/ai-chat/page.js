'use client';
import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function AIChat() {
  const { messages, sendMessage, status } = useChat({
    initialMessages: [
      { 
        id: '1', 
        role: 'assistant', 
        parts: [{ type: 'text', text: "👋 Hello! I'm your AI Mentoring Assistant.\n\nI see you're focusing on some complex architecture. What should we tackle today?\n* 🏗️ Reviewing smart contracts\n* ⚛️ Next.js frontend logic\n* 🧠 General computer science concepts" }] 
      }
    ]
  });
  
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef(null);
  const isLoading = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    // Send the message using the new v6 API
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <header className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-zinc-500 hover:text-black dark:hover:text-white transition">
            ← Back
          </Link>
          <h1 className="font-semibold text-lg text-zinc-900 dark:text-white">AI Co-Pilot</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-zinc-500">Online</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                  ? 'bg-black text-white dark:bg-white dark:text-black rounded-br-none' 
                  : 'bg-white border border-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 rounded-bl-none'
              }`}>
                {/* In v6, text content is stored inside the parts array */}
                {m.parts?.map((part, i) => (
                   part.type === 'text' ? (
                     <ReactMarkdown 
                       key={i}
                       components={{
                         p: ({node, ...props}) => <p className="mb-3 last:mb-0" {...props} />,
                         ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />,
                         ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />,
                         li: ({node, ...props}) => <li className="pl-1" {...props} />,
                         strong: ({node, ...props}) => <strong className="font-bold text-inherit" {...props} />
                       }}
                     >
                       {part.text}
                     </ReactMarkdown>
                   ) : null
                ))}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-2xl rounded-bl-none p-4 flex gap-1 items-center">
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={endOfMessagesRef} />
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <form onSubmit={handleSend} className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the AI Mentor anything..."
            className="w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full py-4 pl-6 pr-32 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition text-zinc-900 dark:text-white"
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 bottom-2 bg-black text-white dark:bg-white dark:text-black px-6 rounded-full font-medium disabled:opacity-50 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}