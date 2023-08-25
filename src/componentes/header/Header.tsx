import './Header.css';

export default function Header() {
  return (
    <body>
    <header>
      <img className='logo' src="img/barbie.png" />
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
</body>
  );
}