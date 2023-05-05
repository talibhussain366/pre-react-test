


import raffleTicket from '../../../assets/images/raffleTicket.png'
import { tickets } from './constants';

import './style.scss'

const RaffleTicket = () => {
  return (
    <div className="RaffleTicket">
      <div className='ticket-row d-md-flex justify-content-between gap-3'>
        {tickets.map((ticket, i) => (
          <div className='ticket-item mb-4' key={i}>
            <h4 className='ticket-ttile'>
              Raffle Ticket
            </h4>
            <div className='ticket-body d-flex'>
              <div className='bar-block'>
                <hr className='one'></hr>
                <hr className='two'></hr>
                <hr className='one'></hr>
              </div>
              <div className='ticket-image text-center'>
                <img src={raffleTicket} alt='Ticket' className='img-fluid' />
              </div>
              <div className='bar-block align-items-end'>
                <hr className='one'></hr>
                <hr className='two'></hr>
                <hr className='one'></hr>
              </div>
            </div>
            <h3 className='ticket-title-bottoom'>
              {ticket.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RaffleTicket;
