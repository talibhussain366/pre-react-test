


import TicketImage from '../../assets/images/ticket.png'

import './style.scss'

const RaffleTicket = () => {
  return (
    <div className="RaffleTicket">
      <div className='ticket-row d-md-flex justify-content-between gap-3'>
        <div className='ticket-item mb-4'>
          <h4 className='ticket-ttile'>
            Raffle Ticket
          </h4>
          <div className='ticket-body d-flex'>
            <div className='bar-block'>
              <hr className='one'></hr>
              <hr className='two'></hr>
              <hr className='one'></hr>
            </div>
            <div className='ticket-image'>
              <img src={TicketImage} alt='Ticket' className='img-fluid' />
            </div>
            <div className='bar-block align-items-end'>
              <hr className='one'></hr>
              <hr className='two'></hr>
              <hr className='one'></hr>
            </div>
          </div>
          <h3 className='ticket-title-bottoom'>
            Drako Unchained
          </h3>
        </div>
        <div className='ticket-item mb-4'>
          <h4 className='ticket-ttile'>
            Raffle Ticket
          </h4>
          <div className='ticket-body d-flex'>
            <div className='bar-block'>
              <hr className='one'></hr>
              <hr className='two'></hr>
              <hr className='one'></hr>
            </div>
            <div className='ticket-image'>
              <img src={TicketImage} alt='Ticket' className='img-fluid' />
            </div>
            <div className='bar-block align-items-end'>
              <hr className='one'></hr>
              <hr className='two'></hr>
              <hr className='one'></hr>
            </div>
          </div>
          <h3 className='ticket-title-bottoom'>
            Drako Unchained
          </h3>
        </div>
        <div className='ticket-item mb-4'>
          <h4 className='ticket-ttile'>
            Raffle Ticket
          </h4>
          <div className='ticket-body d-flex'>
            <div className='bar-block'>
              <hr className='one'></hr>
              <hr className='two'></hr>
              <hr className='one'></hr>
            </div>
            <div className='ticket-image'>
              <img src={TicketImage} alt='Ticket' className='img-fluid' />
            </div>
            <div className='bar-block align-items-end'>
              <hr className='one'></hr>
              <hr className='two'></hr>
              <hr className='one'></hr>
            </div>
          </div>
          <h3 className='ticket-title-bottoom'>
            Drako Unchained
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RaffleTicket;
