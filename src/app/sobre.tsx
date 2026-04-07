import './globals.css'
import './sobre.css'

export default function Sobre() {
  return (
    <section id="sobre" className="section sobre-section">
      <div className="sobre-content">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="sobre-grid reveal">
          <div className="sobre-text">
            <p>
              Desenvolvedor web fullstack, atualmente cursando Análise e Desenvolvimento de 
              Sistemas. Trago uma forte bagagem profissional das áreas administrativa e de 
              e-commerce, com experiência prática em gestão de marketplaces, logística e análise 
              de dados operacionais.
            </p>
            <p>
              Possuo domínio de tecnologias como JavaScript, TypeScript, Node.js, Express, React, 
              HTML5, CSS3, Git, PostgreSQL e Prisma ORM. Meu objetivo é ingressar em um ambiente 
              colaborativo como desenvolvedor, aplicando minha visão estratégica e capacidade de 
              resolução de problemas para criar soluções eficientes e de alto impacto.
            </p>
          </div>
          <div className="sobre-stats">
            <div className="stat-card">
              <h3>Desenvolvimento</h3>
              <p>Fullstack</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
