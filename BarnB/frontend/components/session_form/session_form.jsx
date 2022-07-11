import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    const email = this.props.formType === 'signup' ? (
      <label>Email:
      <input type="text"
      value={this.state.email}
      onChange={this.update('email')} />
      </label>
      ) : (<div></div>)

    const lname = this.props.formType === 'signup' ? (
      <label>Last name:
      <input type="text"
      value={this.state.lname}
      onChange={this.update('lname')} />
      </label>
      
    ) : (<div></div>)

    const fname = this.props.formType === 'signup' ? (
      <label>First name:
      <input type="text"
      value={this.state.fname}
      onChange={this.update('fname')} />
      </label>
      
    ) : (<div></div>)

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to BarnB!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              {/* {this.formType === 'signup' ? (
                <label>Email:
                  <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')} />
                </label>
              ): (<div></div>)} */}
              {email}
              <br />
              {fname}
              <br />
              {lname}
              <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
              {/* {this.formType === 'signup' ? (
                <label>First Name:
                  <input type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')} />
                  </label>
                ): (<div></div>)} */}
                <br />
              {/* {this.formType === 'signup' ? (
                <label>Last name:
                  <input type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')} />
                </label>
              ): (<div></div>)} */}
              <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;