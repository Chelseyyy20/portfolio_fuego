'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const words = ['Software Engineer', 'Problem Solver', 'Code Enthusiast', 'Developer'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10" style={{
        background: 'radial-gradient(circle at 20% 50%, var(--accent) 0%, transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite'
      }} />
      <div className="absolute inset-0 opacity-5" style={{
        background: 'radial-gradient(circle at 80% 50%, var(--accent) 0%, transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite 2s'
      }} />

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Icon/Avatar with glow */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-full border-2 flex items-center justify-center relative" 
          style={{ 
            borderColor: 'var(--accent)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
            animation: 'float 3s ease-in-out infinite'
          }}>
          <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
          <span style={{ color: 'white' }}>Chelsey</span>
          <br />
          <span style={{
            background: 'linear-gradient(90deg, var(--accent), #ffed4e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Fuego</span>
        </h1>

        <div className="h-12 sm:h-16 mb-6 sm:mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold transition-all duration-500" style={{ color: 'var(--accent)' }}>
            {words[currentWord]}
          </p>
        </div>

        <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Crafting elegant solutions through clean code and creative problem-solving. Turning ideas into reality, one project at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href="#projects"
            className="px-8 sm:px-10 py-3 sm:py-4 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--accent)', 
              color: 'white',
              boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)'
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 sm:px-10 py-3 sm:py-4 font-semibold rounded-lg border-2 transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'black'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ animation: 'bounce 2s infinite' }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
