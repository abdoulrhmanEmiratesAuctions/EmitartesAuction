import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/home';
import './App.css'
function App() {
  return (
    <div className="">
      <BrowserRouter   >
          <Route exact path="/" component={Home} />
        </BrowserRouter>
    </div>
  );
}

export default App;
