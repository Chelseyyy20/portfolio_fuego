export default function Experience() {
  const experiences = [
    {
      role: "Beginner Software Engineer",
      proficiency: "Building Foundations",
      details: [
        "Java: Proficient in object-oriented programming and data structures",
        "C/C++: Strong understanding of memory management and system-level programming",
        "TypeScript: Exploring type-safe JavaScript development",
        "Web Development: HTML, CSS, JavaScript, React, Next.js",
        "Python: Data structures and algorithmic thinking",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
          <span style={{ color: 'var(--accent)' }}>Experience</span> & Skills
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="pl-6 sm:pl-8" style={{ borderLeft: `2px solid var(--accent)` }}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{exp.role}</h3>
              <p className="mb-6 text-lg" style={{ color: 'var(--text-secondary)' }}>{exp.proficiency}</p>

              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1" style={{ color: 'var(--accent)' }}>▸</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
