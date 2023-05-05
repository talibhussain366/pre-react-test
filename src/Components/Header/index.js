
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connectWallet, addEllipsis } from '../../utils/functions'

import logo from '../../assets/images/logo.svg'
import brand from '../../assets/images/brand.svg'

import './style.scss';

const Header = () => {
  const [walletAddress, setWalletAddress] = useState('')

  const handleConnectWallet = async () => {
    try {
      const { account, provider } = await connectWallet()
      setWalletAddress(account)
      provider.on('accountsChanged', (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0])
        } else setWalletAddress('')
      })
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="xl" className='justify-content-between custom-menu'>
        <Navbar.Brand href="" className='flex-grow-1'>
        <Nav.Link href="/">
          <div className='d-flex gap-3'>
            <img src={logo} className='img-fluid' width={50} alt='logo' />
            <img src={brand} className='img-fluid' alt='brand' />
          </div>
        </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Nav.Link href="/burn-a-drako">Burn a Drako</Nav.Link>
            <Nav.Link href="/raffle-tickets">$Egg Auction</Nav.Link>
            <Nav.Link href="/egg-auction">Raffle Tickets</Nav.Link>
            <NavDropdown title="P2P Trading" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button
            className='connect-wallet'
            onClick={handleConnectWallet}
          >
            {addEllipsis(walletAddress) || 'Connect Wallet'}
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
