import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import '../styles/app.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <aside>
            <Navigation/>
          </aside>
          <section>
            <Page/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
