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
      titulo: "HATAKE ANIMES",
      sinopse: "Esse foi um projeto que eu produzi em busca de aperfeiçoamento na site figma",
      imagem: "/hatake.png"
    },
    {
      id: 2,
      titulo: "BYTE INFORMATICA",
      sinopse: "Esse foi um frame que eu criei na plataforma figma baseado na materia interface grafica da professora Tabata ",
      imagem: "/byte.png"
    },
    {
      id: 3,
      titulo: "JIFS 2023",
      sinopse: "Essa foi a minha primeira participação no JIFSMS em Dourados, infelizmente nao conseguimos o primeiro o lugar, ficamos com o segundo",
      imagem: "/jifs.jpg"
    },
    {
      id: 3,
      titulo: "INTERCLASSE 2023",
      sinopse: "",
      imagem: "/jifs.jpg"
    }
  ];
  

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

      <img src="main.gif" alt="main" className="img2" />

    

      <div className="pesquisa">
                
                <p>Buscar Projetos</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'></p>
                </div>
            </div>
    
            <main className="content-main">
        {projetos.filter((projeto) => projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto) => (
          <Projeto
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
