import './globals.css'
import './projetos.css'

export default function Projetos() {
  const projetos = [
    {
      nome: "To-Do List App",
      desc: (
        <div className="projeto-detalhes">
          <p>Aplicação web para organização de tarefas com categorias e tags. Conta com autenticação segura, recuperação de senha e edição de perfil.</p>
          <ul>
            <li><strong>Frontend:</strong> React, React Router, Material UI (MUI), Axios, React Hook Form, TanStack React Query</li>
            <li><strong>Backend:</strong> Node.js, Express, PostgreSQL, Prisma ORM, Multer, Nodemailer</li>
            <li><strong>Segurança:</strong> Bcrypt, JSON Web Token (JWT)</li>
            <li><strong>Validação & Formatação:</strong> Zod, Date-fns</li>
            <li><strong>Testes:</strong> Vitest, Supertest</li>
          </ul>
        </div>
      ),
      github: "https://github.com/bueno-devs",
      site: "https://todo-app-bav.pages.dev/"
    }
  ];

  return (
    <section id="projetos" className="section projetos-section">
      <div className="projetos-content">
        <h2 className="section-title">Meu Projeto</h2>
        <div className="projetos-grid reveal">
          {projetos.map((projeto, idx) => (
            <div className="projeto-card" key={idx}>
              <div className="projeto-info">
                <h3>{projeto.nome}</h3>
                <div className="projeto-desc-container">{projeto.desc}</div>
              </div>
              <div className="projeto-links">
                <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="btn-repo">Ver Repositório</a>
                {projeto.site && <a href={projeto.site} target="_blank" rel="noopener noreferrer" className="btn-repo">Acessar Site &rarr;</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
