import React from 'react';

class BookingEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.booking.id,
      startdate: this.props.booking.startdate,
      enddate: this.props.booking.enddate,
      nguests: this.props.booking.nguests,
      listing_id: this.props.booking.listing_id,
      guest_id: this.props.booking.guest_id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchBooking()
  }

  handleSubmit(e){
    e.preventDefault();
    const newState = Object.assign({}, this.state)
    this.props.updateBooking(newState)
    this.props.history.push(`/`)
  }

  update(field){
    return e => (
      this.setState({[field]: e.target.value})
    )
  }

  render(){
    return(
      <div className='edit-form'>
        <form onSubmit={this.handleSubmit}>
          <div className='calendar-inputs'>
            <div className='calendar-dates'>
              <div className='input checkin'>
                <label>Checkin:
                  <input onChange={this.update('startdate')} type="date" className='calendar-input' value={this.state.startdate} />
                </label>
              </div>
              <div className='input checkout'>
                <label>Checkout:
                  <input onChange={this.update('enddate')} type="date" className='calendar-input' value={this.state.enddate} />
                </label>
              </div>
            </div>
              <label>Nuber of guests:
                <select className='num-guests' value={this.state.nguests} onChange={this.update('nguests')} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </label>
          </div>
          <br /><br />
          <button className='calendar-btn btn'>Confirm</button>
        </form>
      </div>
    )
  }
}

export default BookingEdit