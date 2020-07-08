import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/home';
import './App.css';
import { Provider } from 'react-redux';
import { createStoreWithMiddleware } from './redux/index';
import "../node_modules/video-react/dist/video-react.css"; // import css

function App() {
  return (
    <div className="">
      <Provider store={createStoreWithMiddleware}>
        <BrowserRouter   >
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
