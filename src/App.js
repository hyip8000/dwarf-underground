import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Article from './Article.js';
import Side from './Side.js';
import OtherArticle from './Other-article.js';

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

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>

    
      </div>
    );
  }
}

export default App;
