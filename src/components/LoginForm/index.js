import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    // preparing the request object
    // for which we are giving username and password from the state.
    // i.e., accessing username and password from state.
    const {username, password} = this.state
    const userDetails = {username, password}

    // adding the Options or giving the url or api
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    // finally we have the url and the options so lets make the request
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    // successfully i got a JWT token in a object form in the console as output.

    console.log(response)
    if (response.ok === true) {
      this.onLoginSuccess()
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
