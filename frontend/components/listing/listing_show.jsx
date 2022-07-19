
import React from 'react';

class ListingShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchListing()
  }


  render (){
    if (!this.props.listing){
      return null
    }
    const toDay= new Date().toISOString().substring(0, 10);
    const {title, address, state, city, zipcode, beds, price, photoUrls, description } = this.props.listing
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
              <div className='second-img-container'>
                <div style={divStyle2} className='img-container2'></div>
                <div style={divStyle3} className='img-container2'></div>
                {/* <div style={divStyle4} className='img-container2'></div> */}
                {/* <div style={divStyle5} className='img-container2'></div> */}
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
                <div className='calendar-inputs'>
                  <div className='input checkin'>
                    <label>Checkin:
                      <input type="date" className='calendar-input' defaultValue={toDay} />
                    </label>
                  </div>
                  <div className='input checkout'>
                    <label>Checkout:
                      <input type="date" className='calendar-input' defaultValue={toDay} />
                    </label>
                  </div>
                </div>
                <br /><br />
                <button className='calendar-btn btn'>Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow