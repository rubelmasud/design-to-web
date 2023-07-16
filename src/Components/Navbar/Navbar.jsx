import './Navbar.css'
import logo from '../../assets/Logo/278110879_382405630561301_475196034814026231_n-removebg-preview.png'

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="logo">
                <img src={logo} alt="" />
            </a>
            <ul className="navbar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;