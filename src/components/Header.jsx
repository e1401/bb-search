import bbLogo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="headerLayout">
      <Link to="/">
        <img src={bbLogo} alt="Breaking bad logo" />
      </Link>
      <Link className="linkText" to="/randomQuote">
        Random Quote
      </Link>
    </header>
  );
};

export default Header;
