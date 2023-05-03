


import CollectionImage from '../../assets/images/collection.png'

import './style.scss';

const RaffleState = () => {
  return (
    <div className="RaffleState">
      <div className='row  item-row gap-4 '>
        <div className='col-md-4 mb-5'>
          <div className='card active'>
            <div className='cardHead'>
              <div className='contentDetail'>
                <div className='cardimage'>
                  <img src={CollectionImage} className='img-fluid' alt='title' />
                </div>
              </div>
            </div>
            <div className='cardbody'>
              <h4 className='raffle-title'>Drako #2634</h4>
              <div className='price d-flex justify-content-between'>
                <p>936 sold</p>
                <p className='text-right'>170 winners</p>
              </div>
              <hr />
            </div>
            <div className='cardfooter'>
              <div className='radio-btn'>
                <p><span></span>Raffle open!</p>
              </div>
              <button className='mainBtn'>Viwe raffle</button>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-5'>
          <div className='card'>
            <div className='cardHead'>
              <div className='contentDetail'>
                <div className='cardimage'>
                  <img src={CollectionImage} className='img-fluid' alt='title' />
                </div>
              </div>

            </div>
            <div className='cardbody'>
              <h4 className='raffle-title'>Drako #2634</h4>
              <div className='price d-flex justify-content-between'>
                <p>936 sold</p>
                <p className='text-right'>170 winners</p>
              </div>
              <hr />
            </div>
            <div className='cardfooter'>
              <div className='radio-btn'>
                <p><span></span>Raffle open!</p>
              </div>
              <button className='mainBtn'>Viwe raffle</button>
            </div>

          </div>
        </div>
        <div className='col-md-4 mb-5'>
          <div className='card'>
            <div className='cardHead'>
              <div className='contentDetail'>
                <div className='cardimage'>
                  <img src={CollectionImage} className='img-fluid' alt='title' />
                </div>
              </div>
            </div>
            <div className='cardbody'>
              <h4 className='raffle-title'>Drako #2634</h4>
              <div className='price d-flex justify-content-between'>
                <p>936 sold</p>
                <p className='text-right'>170 winners</p>
              </div>
              <hr />
            </div>
            <div className='cardfooter'>
              <div className='radio-btn'>
                <p><span></span>Raffle open!</p>
              </div>
              <button className='mainBtn'>Viwe raffle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaffleState;
