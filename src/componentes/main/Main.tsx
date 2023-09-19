import React, { useState } from "react";
import Projeto from "../projeto/Projeto"; // Importe o componente correto aqui
import './Main.css';

type ProjetoType = {
  id: number,
  titulo: string,
  sinopse: string,
  imagem: string
}

export default function Main() {
  // Hook
  const [texto, setTexto] = useState("");

  const projetos: ProjetoType[] = [ // Atualize para "projetos" (com "s")
    {
      id: 1,
      titulo: "Barbie",
      sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      imagem: "/barbie.png"
    },
    {
      id: 2,
      titulo: "Transformers Maiza",
      sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      imagem: "/transformes.jpeg"
    },
    {
      id: 3,
      titulo: "Transformers ",
      sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      imagem: "/transformes.jpeg"
    }
  ];

  // A função recebe um atributo chamado e de "event"
  function mudaTexto(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    setTexto(e.target.value)
  }

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="main1-1">Oi, eu sou </h1>
        <h2 className="main2-1">Matheus Guimarães.</h2>
        <h2 className="main2-2">Estudante do IFMS</h2>
        <h2 className="main2-3"> Campus de Naviraí</h2>
        <h1 className="main1-2">Seja bem-vindo ao meu portfólio</h1>
        <button className="main1-3">Me conheça melhor</button>
      </div>

      <img src="main.png" alt="main" className="img2" />
      <div className="pesquisa">
                
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'></p>
                </div>
            </div>
            <main className="content-main">
        {projetos.filter((projeto) => projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto) => (
          <Projeto // Use o componente correto aqui
            key={projeto.id}
            titulo={projeto.titulo}
            sinopse={projeto.sinopse}
            imagem={projeto.imagem}
          />
        ))}
      </main>
    </div>
  );
}
