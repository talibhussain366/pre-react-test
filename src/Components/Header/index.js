
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/logo.svg'
import brand from '../../assets/images/brand.svg'

import './style.scss';

const Header = () => {
  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg" className='justify-content-between custom-menu'>
        <Navbar.Brand href="" className='flex-grow-1'>
          <div className='d-flex gap-3'>
            <img src={logo} className='img-fluid' width={50} alt='logo' />
            <img src={brand} className='img-fluid' alt='brand' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Nav.Link href="#">Burn a Drako</Nav.Link>
            <Nav.Link href="#">$Egg Auction</Nav.Link>
            <Nav.Link href="#">Raffle Tickets</Nav.Link>
            <NavDropdown title="P2P Trading" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button className='connect-wallet'>Connect Wallet</button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
