import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

const navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/calculator">Calculator</Link>
      </div>
    </nav>
  );
};

export default navbar;
