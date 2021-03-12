import React from 'react';

import './App.css';
import { BlogCards } from './components/BlogCards/BlogCards';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export function App() {

  let mainColor = 'black';

  const mainStyles = {
    color: mainColor,
    backgroundColor: 'white'
  }

  return (
    <div className="App">

      <Header />

      <main style={mainStyles}>
        <BlogCards  />
      </main>

      <Footer name="React Blog" year={new Date().getFullYear()} />
      
    </div>
  )
}
