import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js';
import Article from './Article.js';
import Side from './Side.js';
import OtherArticle from './Other-article.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <main className="expanded row">

          <Article />
          
          <Side />

          <OtherArticle />

        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
