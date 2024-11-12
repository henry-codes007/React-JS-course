import Logo from '../logo/Logo'
import { FaGithub } from "react-icons/fa";
import './header.css'
import NotificationIcon from '../NotificationIcon';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='main-header'>
        <Logo/>
        <ul>
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/movies"}>Movies</Link>
            </li>
            <i className="fa fa-microphone" aria-hidden="true"></i>
            <FaGithub/>
            <NotificationIcon/>
        </ul>
    </header>
  )
}

export default Header