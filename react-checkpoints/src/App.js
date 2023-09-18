import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importando Componentes
import Navbar from './components/Navbar/Navbar';

// Importando Páginas
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import SobrePage from './routes/SobrePage';
import ContatoPage from './routes/ContatoPage';
import BlogPage from './routes/BlogPage';
import FaqPage from './routes/FaqPage';

// Importando CSS
import "./App.css"; // 

const App = () => {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      </> 
  )
}

export default App;

