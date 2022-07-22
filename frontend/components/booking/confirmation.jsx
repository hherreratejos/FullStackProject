import React from 'react';

class Confirmation extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.destroyBooking(this.props.bookingId);
  }
  
  render(){
    return(
      <div>
        <h1>Delete Succesfull</h1>
        <h1>Delete Succesfull</h1>
        <h1>Delete Succesfull</h1>
        <h1>Delete Succesfull</h1>
        <h1>Delete Succesfull</h1>
        <h1>Delete Succesfull</h1>
        <h1>Delete Succesfull</h1>

      </div>
    )
  }
}

export default Confirmation