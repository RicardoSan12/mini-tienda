import * as React from 'react';
import { Link } from 'wouter';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">
        <h2>logo</h2>
        <button>buscador</button>
      </div>
      <div className="Header-section modificador">
        <button>User</button>
        <Link to="/producto">Corazon</Link>
        <div>compra</div>
      </div>
    </div>
  );
};

export default Header;
