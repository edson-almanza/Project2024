import './Menu.css'
import Linkedin from '/images/linkedin.png'
import Github from '/images/github.png'
import Twitter from '/images/twitter.png'

const Menu = ({ active, setActive }) => {
  return (
    <div className='menu-main'>
      <nav className="menu-left">
        <button className={`menu-nav ${active === 'Portfolio' ? 'active' : ''}`} onClick={() => setActive('Portfolio')}>PORTFOLIO</button>|
        <button className={`menu-nav ${active === 'Blog' ? 'active' : ''}`} onClick={() => setActive('Blog')}>BLOG</button>|
        <button className={`menu-nav ${active === 'Contact' ? 'active' : ''}`} onClick={() => setActive('Contact')}>CONTACT</button>
      </nav>
      <div className="menu-right">
        <a href="https://linkedin.com" target="_blank">
          <img src={Linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com" target="_blank">
          <img src={Github} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={Twitter} alt="Twiter" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Menu;