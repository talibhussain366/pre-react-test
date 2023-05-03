import CollectionImage from '../../assets/images/collection.png'

import './style.scss';

const Collection = () => {
  return (
    <div className="Collection">
      <div className='row  item-row gap-4'>
        <div className='col-md-4 mb-5'>
          <div className='card'>
            <div className='cardHead'>
              <div className='contentDetail d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <p className='title'>MoonRank</p>
                  <p className='count'>1239</p>
                </div>
                <div className='right'>
                  <p className='title'>HowRare.is Rank</p>
                  <p className='count'>1862</p>
                </div>
              </div>
              <div className='cardimage'>
                <img src={CollectionImage} className='img-fluid' alt='title' />
              </div>
            </div>
            <div className='cardbody'>
              <div className='price d-flex justify-content-between'>
                <p><span>Price:  </span>5642.31 sol</p>
                <p className='text-right'>($ 1,512.48)</p>
              </div>
            </div>
            <div className='cardfooter'>
              <p className='prodTitle'>Darko #2634</p>
              <p className='collection-tag-line'>Drakos Unchained ™ - The Eruption</p>
            </div>

          </div>
        </div>
        <div className='col-md-4 mb-5'>
          <div className='card'>
            <div className='cardHead'>
              <div className='contentDetail d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <p className='title'>MoonRank</p>
                  <p className='count'>1239</p>
                </div>
                <div className='right'>
                  <p className='title'>HowRare.is Rank</p>
                  <p className='count'>1862</p>
                </div>
              </div>
              <div className='cardimage'>
                <img src={CollectionImage} className='img-fluid' alt='title' />
              </div>
            </div>
            <div className='cardbody'>
              <div className='price d-flex justify-content-between'>
                <p><span>Price:  </span>5642.31 sol</p>
                <p className='text-right'>($ 1,512.48)</p>
              </div>
            </div>
            <div className='cardfooter'>
              <p className='prodTitle'>Darko #2634</p>
              <p className='collection-tag-line'>Drakos Unchained ™ - The Eruption</p>
            </div>

          </div>
        </div>
        <div className='col-md-4 mb-5'>
          <div className='card'>
            <div className='cardHead'>
              <div className='contentDetail d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <p className='title'>MoonRank</p>
                  <p className='count'>1239</p>
                </div>
                <div className='right'>
                  <p className='title'>HowRare.is Rank</p>
                  <p className='count'>1862</p>
                </div>
              </div>
              <div className='cardimage'>
                <img src={CollectionImage} className='img-fluid' alt='title' />
              </div>
            </div>
            <div className='cardbody'>
              <div className='price d-flex justify-content-between'>
                <p><span>Price:  </span>5642.31 sol</p>
                <p className='text-right'>($ 1,512.48)</p>
              </div>
            </div>
            <div className='cardfooter'>
              <p className='prodTitle'>Darko #2634</p>
              <p className='collection-tag-line'>Drakos Unchained ™ - The Eruption</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
