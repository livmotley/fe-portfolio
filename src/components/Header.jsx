import { Link } from "react-router";
import '../unique-css/Header.css';

function Header() {
    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-item">home</Link>
            <Link to="/projects" className="navbar-item">projects</Link>
            <Link to="/aboutme" className="navbar-item">about me</Link>
            <Link to="/getintouch" className="navbar-item">get in touch</Link>
        </div>
    )
}

export default Header;