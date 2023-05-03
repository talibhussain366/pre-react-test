import { Link } from "react-router-dom";

import './style.scss';

const Header = () => {
  return (
    <div className="Header d-flex">
      <nav>
        <Link to="/">Home</Link>
        <Link to="burnadrako">Burn A Drako</Link>
      </nav>
    </div>
  );
}

export default Header;
