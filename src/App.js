import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/list'
import Entry from './components/entry'
import styled from 'styled-components';

const Wrapper = styled.div`
  color: red;
  background: black;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Route path='/' exact component={List}/>
        <Route path='/item' component={Entry}/>
      </Router>
    </Wrapper>
  );
}

export default App;
