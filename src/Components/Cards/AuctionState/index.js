import CollectionImage from '../../../assets/images/collection.png'
import { auctions } from './constants'

import { useCountdown } from '../../../hooks/useCountdown';

import './style.scss';

const AuctionState = () => {
  const [days, hours, minutes, seconds] = useCountdown('Wed May 08 2023 20:18:02 GMT+0500');

  return (
    <div className="AuctionState">
      <div className='row  item-row gap-4'>
        {auctions.map((auction, i) => (
          <div className='col-md-4 mb-5' key={i}>
            <div className={`card ${auction.isOpen ? 'active' : ''}`}>
              <div className='card-head'>
                <div className='contentDetail'>
                  <div className='card-image'>
                    <img src={CollectionImage} className='img-fluid' alt='title' />
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <h4 className='raffle-title'>{`Drako #${auction.id}`}</h4>
                <div className='price d-flex justify-content-between'>
                  <p>Current Bid:</p>
                  <p className='text-right'>{`${auction.currentBid}$`}</p>
                </div>
                <hr />
              </div>
              <div className='card-footer'>
                <div className='radio-btn'>
                  <p><span></span>{auction.isOpen ? `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s` : 'Auction closed!'}</p>
                </div>
                <button className='card-btn'>View raffle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuctionState;
