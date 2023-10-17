import './Contato.css';
import React, { useState } from "react";

function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [response, setResponse] = useState('');

  const change_txt = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const change_email = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const change_assunto = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setAssunto(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const resposta = `Nome: ${name}\nEmail: ${email}\nAssunto: ${assunto}`;

    setResponse(resposta);
  };

  return (
    <div className='content-main2'>
      <div className='contact-form'>
        <h2>FORMULÁRIO PARA CONTATO</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={change_txt} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Digite seu email" onChange={change_email} />

          <label htmlFor="message">Assunto:</label>
          <input type="text" name="message" placeholder="Assunto" onChange={change_assunto} />

          <button type='submit'>Enviar</button>
        </form>
      </div>
      {response && (
        <div className="response">
          <h3>Resposta do Formulário:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Contato;

