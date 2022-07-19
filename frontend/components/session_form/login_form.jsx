import React from 'react';
import { openModal } from '../../actions/modal_actions';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount(){
    this.props.removeSessionErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
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
    return (
      <div className="login-form-container">
          <h2>Please Login!</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Welcome to BarnB!</h1>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder='Email'
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder='Password'
              />
            </label>
            <br />
            <input className="session-submit btn" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;