import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import './App.scss';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      {/* <Navbar /> */}
      <Switch>
          <Route
            path="/"
            component={Home}/>
        <Route
          path="/:city"
          component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
