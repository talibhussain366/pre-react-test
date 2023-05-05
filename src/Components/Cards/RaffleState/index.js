import CollectionImage from '../../../assets/images/collection.png'
import { raffles } from './constants'

import './style.scss';

const RaffleState = () => {
  return (
    <div className="RaffleState">
      <div className='row  item-row gap-4'>
        {raffles.map((raffle, i) => (
          <div className='col-md-4 mb-5' key={i}>
            <div className={`card ${raffle.isOpen ? 'active' : ''}`}>
              <div className='card-head'>
                <div className='contentDetail'>
                  <div className='card-image'>
                    <img src={CollectionImage} className='img-fluid' alt='title' />
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <h4 className='raffle-title'>{`Drako #${raffle.id}`}</h4>
                <div className='price d-flex justify-content-between'>
                  <p>{`${raffle.sold} sold`}</p>
                  <p className='text-right'>{`${raffle.totalWinner} winners`}</p>
                </div>
                <hr />
              </div>
              <div className='card-footer'>
                <div className='radio-btn'>
                  <p><span></span>Raffle open!</p>
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

export default RaffleState;
