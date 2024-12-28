import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div style={{
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(#e6e6fa, #ffc0cb)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Navbar />
      <LanguageSwitcher />
      
    </div>
  );
}

export default App;
