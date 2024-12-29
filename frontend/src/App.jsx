import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navbar from './components/Navbar';
import './assets/styles/App.css';

function App() {
  return (
    
    <div className="app-container">
      <Navbar />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
