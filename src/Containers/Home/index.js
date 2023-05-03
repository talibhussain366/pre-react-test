import Carousel from 'react-bootstrap/Carousel'
import sliderImage1 from '../../assets/images/slider-image-1.png'
import calanderIcon from '../../assets/images/calendar.svg'
import Collection from '../../Components/Collection'
import RaffleTickets from '../../Components/RaffleTicket'
import RaffleState from '../../Components/RaffleState'

import './style.scss';

const Home = () => {
  return (
    <div className="Home">
      <div className='top-header-title'>
        <h1 className='maintitle'>Burn, Auction, Raffle and Trade</h1>
        <h4 className='tagline'>from leading creators and brands</h4>
      </div>
      <div className='top-slider'>
        <Carousel controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 slideImage"
              src={sliderImage1}
              alt="First slide"
            />
            <Carousel.Caption>
              <button className='topbtn'><span><img src={calanderIcon} className='img-fluid' alt='calanderIcon' width={32} />UPCOMING</span></button>
              <p>Mon, Apr 23</p>
              <h3>Darko #2452</h3>
              <button className='bottombtn'>View</button>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slideImage"
              src={sliderImage1}
              alt="First slide"
            />
            <Carousel.Caption>
              <button className='topbtn'><span><img src={calanderIcon} className='img-fluid' alt='calanderIcon' width={32} />UPCOMING</span></button>
              <p>Mon, Apr 23</p>
              <h3>Darko #2452</h3>
              <button className='bottombtn'>View</button>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slideImage"
              src={sliderImage1}
              alt="First slide"
            />
            <Carousel.Caption>
              <button className='topbtn'><span><img src={calanderIcon} className='img-fluid' alt='calanderIcon' width={32} />UPCOMING</span></button>
              <p>Mon, Apr 23</p>
              <h3>Darko #2452</h3>
              <button className='bottombtn'>View</button>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='timer container'>
        <p>
          0d : 12h : 51m : 47s
        </p>
      </div>
      <div className='top-collections container'>
        <h1 className='sectiontitle text-center'>Top Collections</h1>
        <Collection/>
      </div>
      <div className='raffle-tickets container'>
        <h1 className='sectiontitle text-center'>Raffle Tickets</h1>
        <RaffleTickets/>
      </div>
      <div className='raffle-state container'>
        <h1 className='sectiontitle text-center'>Raffle State</h1>
        <RaffleState/>
      </div>
    </div>
  );
}

export default Home;
