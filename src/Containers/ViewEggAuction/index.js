import Banner from '../../Components/Banner';
import DrakoImage from '../../assets/images/burn-drako.png'
import TicketImage from '../../assets/images/egg-token.png'

import './style.scss'

const ViewEggAuction = () => {
  return (
    <div className="ViewEggAuction">
      <div className='burn-drako-summary'>
        <div className='row'>
          <div className='left-column'>
            <div className='drakos-inner'>
              <div className='drako-list row'>
                <div className='col-md-6'>
                  <div className='card'>
                    <div className='drako-img text-center'>
                      <img src={DrakoImage} alt='drako' width={460} height={410} className='img-fluid' />
                    </div>
                  </div>
                </div>
                <div className='col-1'></div>
                <div className='col-md-5'>
                  <div className='detailscard text-center'>
                    <p>NFT Name:</p>
                    <h2>Drako #2634</h2>
                    <p>Project Name:</p>
                    <h2>ABCDEGHIJKLMN</h2>
                    <p>Winners:</p>
                    <h2>145</h2>
                    <p>NFTs:</p>
                    <h2>1</h2>
                  </div>
                </div>
              </div>
              <hr className='mt-4' />
              <div className='description-text'>
                <p>Description :</p>
                <p>DeGods and DeadGods were already perfect to begin with. But what does a transformation from one to the other actually look like? Magnum AI has the answer you have been looking for, behold the legendary DeGodnum</p>
              </div>
            </div>
          </div>
          <div className='right-column'>
            <div className='information-details'>
              <div className='user-info'>
                <h1 className='list-title text-center'>User Info</h1>
                <ul className='info-list'>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>Your Balance :</span><span className='right'>10,023</span></p></li>
                </ul>
                <hr />
              </div>
              <div className='auction-info text-center'>
                <h1 className='list-title text-center'>Auction Info</h1>
                <img src={TicketImage} alt='Tixket' className='img-fluid' />
                <p>
                  Auction closed!
                </p>
                <p>
                  🎉Congrats to the winner🎉
                </p>
                <p>
                  F1WL....MNVo won for 950 $EGG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bidHistory'>
        <h1 className='section-title'>Bid History</h1>
        <ul className='bidList'>
          {[1, 2, 3, 4].map(i => (
            <li
              className='d-flex justify-content-between align-items-center'
              key={i}
            >
              <span className='left'>4Tzr....w8rA</span>
              <span className='mid'>16 hours ago</span>
              <span className='right'>30 $EGG</span>
            </li>
          ))}
        </ul>
      </div>
      <Banner />
    </div>
  );
}

export default ViewEggAuction;
