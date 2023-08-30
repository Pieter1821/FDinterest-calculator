import { Link } from 'react-scroll';
import '../styles/navbar.scss'

const navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="links-container">
        <Link to="/" smooth={true}>Home</Link>
        <Link to="/about" smooth={true}>About</Link>
        <Link to="/calculator" smooth={true}>Calculator</Link>
      </div>
    </nav>
  );
};

export default navbar;
