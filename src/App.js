import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    email: "",
    isValid: false
  };

  validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  updateEmail = e => {
    const { value } = e.target;
    const isValid = !value || this.validateEmail(value);

    this.setState({
      email: value,
      isValid
    });
  };

  submitForm = () => {
    const { email } = this.state;
    alert("Your email", email);
  };

  render() {
    const { isValid, email } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <form>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.updateEmail}
            />
            <button onClick={this.submitForm} disabled={!isValid}>
              Submit
            </button>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
