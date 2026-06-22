import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
              
              {/*  here i will add the Logo */} 
        <Link className="navbar-brand" to="/">
          React Movies Dashboard
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>

      </div>
    </nav>
  );
}