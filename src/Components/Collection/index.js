import CollectionImage from '../../assets/images/collection.png'
import { collections } from './constants'

import './style.scss';

const Collection = () => {
  return (
    <div className="Collection">
      <div className='row item-row gap-4'>
        {collections.map((collection, i) => (
          <div className='col-md-4 mb-5' key={i}>
            <div className='card'>
              <div className='card-head'>
                <div className='contentDetail d-flex justify-content-between align-items-center'>
                  <div className='left-label'>
                    <p className='title'>MoonRank</p>
                    <p className='label-value'>{collection.noonRank}</p>
                  </div>
                  <div className='right-label'>
                    <p className='title'>HowRare.is Rank</p>
                    <p className='label-value'>{collection.howRareIsRank}</p>
                  </div>
                </div>
                <div className='card-image'>
                  <img src={CollectionImage} className='img-fluid' alt='title' />
                </div>
              </div>
              <div className='card-body'>
                <div className='price d-flex justify-content-between'>
                  <p><span>Price:  </span>{`${collection.price} sol`}</p>
                  <p className='text-right'>{`($ ${collection.priceInUSD})`}</p>
                </div>
              </div>
              <div className='card-footer'>
                <p className='prodTitle'>{`Darko ${collection.id}`}</p>
                <p className='collection-tag-line'>{collection.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
