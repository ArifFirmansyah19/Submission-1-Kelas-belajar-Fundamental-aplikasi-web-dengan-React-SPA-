import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderApp from './components/HeaderApp';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <header>
        <HeaderApp/>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-note" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
