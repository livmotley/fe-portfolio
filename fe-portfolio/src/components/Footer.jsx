import { Link } from "react-router";
import favicon from "../assets/favicon.png";
import "../unique-css/Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <Link to="/" className="footer-logo">
                <img src={favicon} alt="rotating flower logo" className="animated-footer-logo"/>
            </Link>
        </footer>
    )
}

export default Footer;