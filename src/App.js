import React from "react";

import "./App.css";
import { BlogPage } from "./components/BlogPage/BlogPage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => {

  return (
    <div className="App">
      
      <Header />

      <main>
        
        <BlogPage />

      </main>

      <Footer name="React Blog" year={new Date().getFullYear()} />
    </div>
  );
}
