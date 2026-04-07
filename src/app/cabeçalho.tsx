"use client";

import { useEffect, useState } from 'react';
import './globals.css'
import './cabeçalho.css'

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default function Cabecalho() {
  const [tema, setTema] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema_portfolio');
    if (temaSalvo) {
      setTema(temaSalvo as 'dark' | 'light');
      document.documentElement.setAttribute('data-theme', temaSalvo);
    }
  }, []);

  const alternarTema = () => {
    const novoTema = tema === 'dark' ? 'light' : 'dark';
    setTema(novoTema);
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('tema_portfolio', novoTema);
  };

  const rolarPara = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior:"smooth" });
    }
  };

  return (
    <header>
      <div className="nav-container">
        <button className="nav-link" onClick={() => rolarPara("inicio")}>Início</button> 
        <button className="nav-link" onClick={() => rolarPara("sobre")}>Sobre mim</button>
        <button className="nav-link" onClick={() => rolarPara("skills")}>Skills</button>
        <button className="nav-link" onClick={() => rolarPara("projetos")}>Projetos</button>
        <button className="theme-toggle" onClick={alternarTema} aria-label="Alternar tema">
          {tema === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
