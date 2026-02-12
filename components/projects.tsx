'use client';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A fullstack application showcasing modern web development practices and clean architecture principles.",
      tags: ["JavaScript", "React", "Database"],
      icon: "💻",
      link: "https://github.com/Chelseyyy20",
      github: "https://github.com/Chelseyyy20",
    },
    {
      title: "Project Two",
      description: "Built with cutting-edge technologies to deliver seamless user experiences and robust backend systems.",
      tags: ["TypeScript", "Next.js", "API"],
      icon: "🚀",
      link: "https://github.com/Chelseyyy20",
      github: "https://github.com/Chelseyyy20",
    },
    {
      title: "Project Three",
      description: "Demonstrates proficiency in multiple programming languages and problem-solving capabilities.",
      tags: ["C++", "Python", "Algorithms"],
      icon: "⚙️",
      link: "https://github.com/Chelseyyy20",
      github: "https://github.com/Chelseyyy20",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
          Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
        </h2>
        <p className="text-lg mb-12 sm:mb-16" style={{ color: 'var(--text-secondary)' }}>
          Explore some of my recent work and technical solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                border: `2px solid var(--accent)33`,
                backgroundColor: 'rgba(255, 215, 0, 0.02)',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--accent)';
                el.style.backgroundColor = 'rgba(255, 215, 0, 0.08)';
                el.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--accent)33';
                el.style.backgroundColor = 'rgba(255, 215, 0, 0.02)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Icon in corner */}
              <div className="text-5xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity">
                {project.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors" style={{ color: 'var(--accent)' }}>
                {project.title}
              </h3>

              <p className="mb-4 sm:mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border transition-all duration-300"
                    style={{
                      borderColor: 'var(--accent)66',
                      color: 'var(--accent)',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors font-semibold group/link"
                style={{ color: 'var(--accent)' }}
              >
                View on GitHub
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://github.com/Chelseyyy20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              border: `2px solid var(--accent)`,
              color: 'var(--accent)',
              boxShadow: '0 4px 15px rgba(255, 215, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.1)';
            }}
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
