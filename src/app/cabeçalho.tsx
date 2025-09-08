import './globals.css'
import './cabeçalho.css'

export default function Cabecalho() {
  return (
    <header>
    <div className="botoes-container">
        <button>Inicio</button>
        <button>Sobre mim</button>
        <button>Skills</button>
        <button>Projetos</button>
      </div>
      <hr />
    </header>
  );
}
