
import React from 'react';

class ListingShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      startdate: this.toDay(),
      enddate: this.toDay(),
      nguests: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchListing()
  }

  changeType(str){
    return (str)
  }

  handleSubmit(e){
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    booking['listing_id'] = this.props.listing.id
    booking['guest_id'] = this.props.currentUser.id
    this.props.createBooking(booking).then( () => this.props.history.push(`/bookings/${this.props.currentUser.id}`))
  }

  update(field){
    return e => (
      this.setState({[field]: e.target.value})
    )
  }

  toDay(){
    return new Date().toISOString().substring(0, 10)
  }


  render (){
    const {id, title, address, state, city, zipcode, beds, price, photoUrls, description } = this.props.listing
    const divStyle1 = { "backgroundImage": `url(${photoUrls[0]})`,
                        "backgroundSize": '100% 100%' };
    const divStyle2 = { "backgroundImage": `url(${photoUrls[1]})`,
                        "backgroundSize": '100% 100%' };
    const divStyle3 = { "backgroundImage": `url(${photoUrls[2]})`,
    "backgroundSize": '100% 100%' };
    const divStyle4 = { "backgroundImage": `url(${photoUrls[3]})`,
                        "backgroundSize": '100% 100%' };
    const divStyle5 = { "backgroundImage": `url(${photoUrls[4]})`,
                        "backgroundSize": '100% 100%' };
    return(
      <div className='listing-show-container'>
        <div className='listing-show'>
          <div className='general-show'>
            <br />
            <h2 id='title'>{title}</h2>
            <br />
            <div className='listing-show-img'>
              <div style={divStyle1} className='img-container1'></div>
              <div>
                <div style={divStyle2} className='img-container2'></div>
                <div style={divStyle3} className='img-container2'></div>
              </div>
              <div>
                <div style={divStyle4} className='img-container2'></div> 
                <div style={divStyle5} className='img-container2'></div>
              </div>
            </div>
            <br />
            <div className='extra-container'>
              <div className='show-description'>Location: {address}, {city}, {state} 
                <br /><br />
                This place has {beds} beds.
                <br /><br />
                {description}
              </div>
              <div className='calendar'>
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
                  <button className='calendar-btn btn'>Reserve</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow

// onClick={this.props.history.push(`/bookings/${this.state.entities.bookings[bookings.length - 1]}`)}