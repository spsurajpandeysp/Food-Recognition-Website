import './Header.css'
import logo from './logoFR.png'
const Header = () => {
    return <div className="header">
        <header class="header-container">
            <div className='header-heading'>
            Food Recognition System
            </div>
               
            <ul class="header-feature">
                <li class="header-feature-list"><a href="#"  class="header-link" aria-current="page">Home</a></li>
                <li class="header-feature-list"><a  href="#service-section" class="header-link">Features</a></li>
                <li class="header-feature-list"><a href="#about-section" class="header-link">About</a></li>
                <li class="header-feature-list"><a href="#contact-section" class="header-link">Contact Us</a></li>
                <li class="header-feature-list"><a href="#faq-section" class="header-link">FAQs</a></li>
            </ul>
        </header>
    </div>
}

export default Header;