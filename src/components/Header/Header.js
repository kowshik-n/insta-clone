import fullLogo from '../../assets/images/logo.svg';
import UserAvatar from '../../assets/images/user.jpg';
import './style.css';

function Header(){
    return(
        <div className="Header">
            <div className="container">
                {/* Logo of App */}
                <img className="headerLogo" src={fullLogo} alt="Instagram Logo" />
                {/* User Avatar */}
                <img className="headerAvatar AvatarCircle" src={UserAvatar} alt="Profile Picture"/>
            </div>
        </div>
    )
}

export default Header