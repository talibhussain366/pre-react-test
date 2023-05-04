import './style.scss';
import EggTocken from '../../assets/images/egg-token.png';

const Banner = () => {
  return (
    <div className="Banner">
      <div className='container'>
        <h1 className='banner-title'>UNIQUE PRODUCT</h1>
        <h3 className='banner-Subtitle'>When you buy a Drakos, you don't buy only an avatar or a piece of art.
          You're becoming part of a new era of the digital world with an asset whose
          benefits and offerings will increase over time.</h3>
        <div className='egg-tokens d-md-flex align-items-center'>
          <div className='left'>
            <img src={EggTocken} alt='eggTocken' className='img-fluid'></img>
          </div>
          <div className='centered flex-grow-1'>
            <h2>$EGG TOKEN</h2>
            <h4>Start earning passive income simply by holding your Drakos NFT and
              monetizing your gaming experiences by joining a Drakos battle.</h4>
          </div>
          <div className='right'>
            <img src={EggTocken} alt='eggTocken' className='img-fluid'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
