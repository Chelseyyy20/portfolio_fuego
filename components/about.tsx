'use client';

export default function About() {
  const skills = [
    { name: "Java", level: "Advanced" },
    { name: "C", level: "Advanced" },
    { name: "C++", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "HTML/CSS", level: "Advanced" }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16">
          <span style={{ color: 'var(--accent)' }}>About</span> Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm a passionate beginner software engineer exploring the intersection of creativity and technical excellence. With a strong foundation in multiple programming languages, I love solving problems and building applications that make a difference.
            </p>

            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My journey in tech started with a curiosity for how things work. Since then, I've dedicated myself to mastering core programming concepts and expanding my toolkit across various languages and frameworks.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--accent)' }}>What Drives Me</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>✨ Clean, maintainable code</li>
                <li>🚀 Solving complex problems</li>
                <li>📚 Continuous learning</li>
                <li>🎯 Building meaningful projects</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--accent)' }}>Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-lg border transition-all duration-300 hover:scale-105"
                  style={{ 
                    borderColor: 'var(--accent)66',
                    backgroundColor: 'rgba(255, 215, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)66';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <p className="font-semibold" style={{ color: 'var(--accent)' }}>{skill.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
