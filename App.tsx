import * as React from 'react';
import './style.css';
import { Route, Link } from 'wouter';

import Header from './components/Header';
import Phones from './components/Phones';

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/producto" component={Phones} />
    </div>
  );
};

export default App;
