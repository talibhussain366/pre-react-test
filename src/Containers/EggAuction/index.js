import CollectionImage from '../../assets/images/collection.png'

import './style.scss'

const EggAuction = () => {
  return (
    <div className="EggAuction">
      <h1 className='section-title'>$EGG Auction</h1>
      <div className='row  item-row gap-4'>
      {[1, 2, 3, 4].map(i => (
        <div className='col-md-4 mb-5'  key={i}>
          <div className='card active'>
            <div className='card-head'>
              <div className='contentDetail'>
                <div className='topdescrip'>
                  <p>Darko #2634</p>
                  <p>Drakos Unchained ™ - The Eruption</p>
                </div>
                <div className='card-image'>
                  <img src={CollectionImage} className='img-fluid' alt='title' />
                </div>
              </div>
            </div>
            <div className='card-body'>
              <div className='price d-flex justify-content-between'>
                <p>Winning Bid :</p>
                <p className='text-right'>30 $EGG</p>
              </div>
            </div>
            <div className='card-footer'>
              <div className='radio-btn'>
                <p className='timer'>0d : 12h : 51m : 47s</p>
                <p>Auction closed!</p>
              </div>
              <button className='card-btn'>View Winners</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default EggAuction;
