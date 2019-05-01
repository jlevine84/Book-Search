import React from 'react';
import './nav.css'

function Nav() {
  return (
    <header className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/"><strong>Google Book Search</strong></a>
        <a className="navbar-brand saved" href="/saved">Saved</a>
      </nav>
    </header>

  );
}

export default Nav
