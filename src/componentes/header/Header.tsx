import './Header.css';

export default function Header() {
  return (
    <header className="portfolio-header">
      <div className="logo-container">
        <img className="logo" src="img/barbie.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Noticia</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
