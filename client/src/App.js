import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import City from './components/City';
import Navbar from './components/Navbar/Navbar';
import React from 'react';

// function handleSubmit(e) {
//   e.preventDefault();
//   console.log(e)
//   console.log(e.target.city.value)
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(e)
//   console.log(e.target.city.value)
// }


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
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
