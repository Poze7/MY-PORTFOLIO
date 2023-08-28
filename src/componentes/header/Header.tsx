import './Header.css';

export default function Header() {
  return (
    <header className="portfolio-header">
      <div>
        <img className="logo" src="logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
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
