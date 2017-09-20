import React from 'react'
import LogIn from './LogIn.jsx'
import SignUp from './SignUp.jsx'


class Header extends React.Component  {
  constructor() {
    super();
    this.state = {
      logInVisible: false,
      signUpVisible: false
    }
  }

  clickListener1() {
    this.setState({logInVisible: !this.state.logInVisible});
  }

  clickListener2() {
    this.setState({signUpVisible: !this.state.signUpVisible});
  }

  render() {
    return (
      <div>
        <div className="container-fluid nav-container">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <ul>
              <li>
                <a className="nav-font" href="#" onClick={() => this.clickListener1()}>Log In</a>
              </li>
              <li>
                <a className="nav-font" href="#" onClick={() => this.clickListener2()}>Sign up</a>
              </li>
            </ul>
          </nav>
        </div>
        {this.state.logInVisible ? <LogIn /> : null}
        {this.state.signUpVisible ? <SignUp /> : null}
      </div>
    );
  };
};

export default Header
