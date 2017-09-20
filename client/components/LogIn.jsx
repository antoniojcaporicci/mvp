import React from 'react'

class LogIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    fetch('http://localhost:3000/login', {
      method: "POST",
      body: JSON.stringify({username: this.state.username, password: this.state.password}),
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json()).then(console.log)
  }

  onChange (e) {
    e.preventDefault();
    var key = e.target.name
    var value = e.target.value
    this.setState({ [key]: value })
  }

  render() {
    return (
        <form className="login-form" onSubmit={this.onSubmit.bind(this)}>
          <label>Username: </label>
          <input onChange={this.onChange.bind(this)} type="text" name="username" />
          <label>Password: </label>
          <input onChange={this.onChange.bind(this)} type="password" name="password" />
          <input type='submit'  value="Log In"/>
        </form>
      );
    };
}

export default LogIn
