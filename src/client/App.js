import React, { Component } from 'react';
import  './app.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <h1 className="app-topbar">this is app</h1>
        <Header />
        <Main />
        <Footer />
       </div>
    );
  }
}

export default App;
