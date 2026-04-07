import './globals.css'
import './skills.css'

export default function Skills() {
  const skills = [
    { name: "JavaScript", category: "Frontend / Backend" },
    { name: "TypeScript", category: "Frontend / Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "Prisma ORM", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Git", category: "Ferramentas" }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-content">
        <h2 className="section-title">Minhas Skills</h2>
        <div className="skills-grid reveal">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
