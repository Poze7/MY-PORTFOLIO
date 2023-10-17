import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: "/sobre",
    element: (
      <>
        <Header />
        <div className="content-main">Página Sobre!</div>
        <Footer />
      </>
    ),
  },
  {
    path: "/noticias",
    element: (
      <>
        <Header />
        <div className="content-main">Página de Notícias!</div>
        <Footer />
      </>
    ),
  },
  {
    path: "/contato",
    element: (
      <>
        <Header />
        <div className="content-main">
          <form className="contact-form">

            <label htmlFor="name">Nome:</label>
            <input type="text1" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message"></textarea>
            
            <button type="submit">Enviar</button>
          </form>
        </div>
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)