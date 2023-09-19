import './Main.css';

export default function Main() {


  return (
    <body>
      
    
    <div className="main-container">
      <div className="content-container">
        <h1 className="main1-1">Oi, eu sou </h1>
        <h2 className="main2-1">Matheus Guimarães.</h2>
        <h2 className="main2-2">Estudante do IFMS</h2>
        <h2 className="main2-3"> Campus de Naviraí</h2>
        <h1 className="main1-2">Seja bem-vindo ao meu portfólio</h1>
        <button className="main1-3" >
          Me conheça melhor
        </button>
      </div>
      <div className="search-bar">
  <input
    type="text"
    placeholder="Pesquisar projetos"
    className="barra"
  />
  <button className="pesquisa">Pesquisar</button>
</div>
<div className="projetos">
  <h2 className="projeto-h2">Meus Projetos</h2>
  <div className="projeto-lista">
    {/* Aqui você pode adicionar a lista de projetos */}
    <div className="projeto-card">
      <h3>Projeto 1</h3>
      <p>Descrição do Projeto 1...</p>
      {/* Adicione mais informações sobre o Projeto 1 */}
    </div>
    <div className="projeto-card">
      <h3>Projeto 2</h3>
      <p>Descrição do Projeto 2...</p>
      {/* Adicione mais informações sobre o Projeto 2 */}
    </div>
    {/* Adicione mais cartões de projeto conforme necessário */}
  </div>
</div>



      <img src="main.png" alt="main" className='img2' />
    </div>
    </body>
  );
}
