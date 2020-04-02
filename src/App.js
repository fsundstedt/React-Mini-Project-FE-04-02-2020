import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/list'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={List}/>
      </Router>
      <List />
    </div>
  );
}

export default App;
