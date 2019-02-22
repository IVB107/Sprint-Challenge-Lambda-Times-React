import React, { Component } from 'react';
import withAuthenticate from './components/withAuthenticate';
import Content from './components/Content/Content';
import Login from './components/Login';
import TopBar from './components/TopBar';
import Header from './components/Header';

const Authenticate = withAuthenticate(TopBar)(Header)(Content)(Login)
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputUsername: '',
      inputPassword: '',
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if (localStorage.isLoggedIn === "true" ) {
      this.setState({ isLoggedIn: Boolean(localStorage.isLoggedIn) });
    }    
  }

  handleEnterUsername = e => {
    this.setState({ inputUsername: e.target.value });
  }

  handleEnterPassword = e => {
    this.setState({ inputPassword: e.target.value });
  }

  handleLogin = e => {
    e.preventDefault();
    console.log("Log In Clicked!");
    window.localStorage.setItem("username", this.state.inputUsername);
    window.localStorage.setItem("password", this.state.inputPassword);
    window.localStorage.setItem("isLoggedIn", !this.state.isLoggedIn);
    this.setState({ 
      isLoggedIn: !this.state.isLoggedIn,
      inputUsername: '',
      inputPassword: ''
    })
    window.location.reload();
  }

  handleLogOut = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
}

  render() {
    return (
      <div className="App">
        <Authenticate 
          loggedIn={this.state.isLoggedIn}
          username={this.state.inputUsername}
          password={this.state.inputPassword}
          enterUsername={this.handleEnterUsername}
          enterPassword={this.handleEnterPassword}
          submitLogin={this.handleLogin}
          logOut={this.handleLogOut}
        />
      </div>
    );
  }
}

export default App;
