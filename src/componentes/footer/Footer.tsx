import './Footer.css';

export default function Footer() {
  return (


<footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h2>Contato</h2>
                <p className='p'>Entre em contato conosco para mais informações:</p>
                <p className='p'>Email: matheus.caetano@estudante.ifms.edu.br</p>
                <p className='p'>Telefone: (67)999079792</p>
            </div>
            <div className="footer-section">
                <h2>Sobre Nós</h2>
                <ul className="links">
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Redes Sociais</h2>
                <ul className="Redes">

                <img  src="img/whats.png" />
                <img  src="img/insta.png" />
                <img  src="img/face.png" />
                </ul>
            </div>
        </div>
    </footer>
    )
}