import Banner from '../../Components/Banner'
import DrakoImage from '../../assets/images/burn-drako.png'

import './style.scss'

const BurnDrako = () => {
  return (
    <div className="BurnDrako">
      <h4 className='section-title'>
        Burn  Drako NFTs and Get $EGG Back!
      </h4>
      <div className='burn-drako-summary'>
        <div className='row'>
          <div className='left-column'>
            <div className='drakos-inner'>
              <div className='text-center'>
                <h3 className='token-title'>GgwiMh6NhqmXA6t8tYFsDLJm7t5uC1te9ei4TkGAxaqz</h3>
                <button className='ShowDrakos'>Show Drakos </button>
              </div>
              <div className='drako-list row'>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='drako-img text-center'>
                      <img src={DrakoImage} alt='drako' width={225} height={200} className='img-fluid w-100' />
                    </div>
                    <button className='burn-drako'>Burn Drako</button>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='drako-img text-center'>
                      <img src={DrakoImage} alt='drako' width={225} height={200} className='img-fluid w-100' />
                    </div>
                    <button className='burn-drako'>Burn Drako</button>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='drako-img text-center'>
                      <img src={DrakoImage} alt='drako' width={225} height={200} className='img-fluid w-100' />
                    </div>
                    <button className='burn-drako'>Burn Drako</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right-column'>
            <div className='information-details'>
              <div className='user-info'>
                <h1 className='list-title text-center'>User Info</h1>
                <ul className='info-list'>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>Your Balance :</span><span className='right'>10,023</span></p></li>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>Total Drakos Burned : </span><span className='right'>100</span></p></li>
                </ul>
                <hr />
              </div>
              <div className='burn-info'>
                <h1 className='list-title text-center'>Burn  Info</h1>
                <ul className='info-list'>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>1 OF 1  =</span><span className='right'>3,000 $EGG</span></p></li>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>LEGENDARY =</span><span className='right'>1,500 $EGG</span></p></li>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>EPIC =</span><span className='right'>1,200 $EGG</span></p></li>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>RARE =</span><span className='right'>900 $EGG</span></p></li>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>UNCOMMON = </span><span className='right'>600 $EGG</span></p></li>
                  <li><p className='d-flex justify-content-between align-items-center'><span className='left'>COMMON =</span><span className='right'>300 $EGG</span></p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default BurnDrako;
