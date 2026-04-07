import Cabecalho from "./cabeçalho"
import './globals.css'
import Inicio from "./inicio"
import Sobre from "./sobre"
import Skills from "./skills"
import Projetos from "./projetos"
import ScrollReveal from "./ScrollReveal"
import Rodape from "./rodape"

export default function Home() {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollReveal />
        <Cabecalho/>

        <main className="snap-container">
          <Inicio />
          <Sobre />
          <Skills />
          <Projetos />
        </main>
        <Rodape />
      </body>
    </html>
  );
}
