// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtworkList from './components/ArtworkList';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
 
</Switch>

      </div>
    </Router>
  );
}

export default App;
