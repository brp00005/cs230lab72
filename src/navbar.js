import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#" style={{ color: 'white' }}>Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{ marginLeft: 'auto' }}>
          <div style={{ width: '200px', display: 'flex', justifyContent: 'flex-end' }}>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '5px' }}>Search</button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;