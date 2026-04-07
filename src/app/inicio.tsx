"use client";

import './globals.css'
import './inicio.css'

export default function Inicio() {
  return (
    <section id="inicio" className="section hero-section">
      <div className="hero-content reveal">
        <h2 className="greeting">Olá, eu sou</h2>
        <h1 className="name-title">Vinícius <span className="highlight">V. Bueno</span></h1>
        <p className="subtitle">Desenvolvedor Web Fullstack</p>
        
        <div className="hero-buttons">
          <a 
            href="https://drive.google.com/file/d/1NtW424NtKtyEDEB2ERVrYreER5X6A3nX/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ textDecoration: 'none', textAlign: 'center' }}
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
          <div className="arrow-down"></div>
      </div>
    </section>
  );
}
