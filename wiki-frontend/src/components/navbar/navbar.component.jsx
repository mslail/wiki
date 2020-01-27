import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/">
        <div component={Link} to="/" className="navbar-brand">
          Wiki
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
