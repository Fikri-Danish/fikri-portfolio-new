// src/pages/Home.js
import React from 'react';
import { Navbar, Hero, About, Projects, Contact, Footer } from '../components/Components';

export function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
