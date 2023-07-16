import './Navbar.css'
import logo from '../../assets/Logo/278110879_382405630561301_475196034814026231_n-removebg-preview.png'
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)


    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <h3>WeCare</h3>
            </div>
            <ul className={isMobile ? 'mobile-nav-links' : 'navbar-list'}
                onClick={() => setIsMobile(false)}
            >
                <li className='Featured'>Featured</li>
                <li>About us</li>
                <li>Fasilities</li>
                <li>Find Doctor</li>
                <li>Contact</li>
                <li className='signUp-btn'>Book Now</li>
            </ul>
            <div onClick={() => setIsMobile(!isMobile)} className='mobile-menu-icon'>
                {
                    isMobile ? <IoMdClose /> : <AiOutlineMenu />
                }
            </div>
        </nav>
    );
}

export default Navbar;