import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
