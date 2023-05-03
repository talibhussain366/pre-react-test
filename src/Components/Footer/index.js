import socialIcons from '../../assets/images/social-icons.png'

import './style.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className='footer-wrapper text-center'>
        <h2>
          FOLLOW US
        </h2>
        <div className='social-icons'>
          <img src={socialIcons} className='img-fluid' width={300} alt='social-icons' />
        </div>
        <button className="footer-btn" href="">JOIN DISCORD</button>
      </div>
      <div className='footerbottom' />
    </div>
  );
}

export default Footer;
