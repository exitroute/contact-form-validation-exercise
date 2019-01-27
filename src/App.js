import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      nameError: "",
      emailError: ""
    }
  };

  handleNameChange = () => {
    this.setState({ name: this.nameInput.current.value }, () => {
      this.validateName();
    });
  }

  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError: name.length < 3 ? null : "Don't you want to be a bit more descriptive?"
    });
  }

  handleEmailChange = () => {
    this.setState(
      { name: this.mailInput.current.value }, () => {
        this.validateEmail();
      });
  }

  validateEmail = () => {
    const { email } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({
      emailError: regex.test(String(email).toLowerCase()) ? null : "Doesnt look right"
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    console.log(name, email);
  };

  nameInput = React.createRef();
  mailInput = React.createRef();

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          Form Validation
          </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="contactName">Name</label>
            <input
              type="text"
              className={`form-control ${this.state.nameError ? "is-valid" : ""}`}
              id="contactName"
              placeholder="Enter name"
              ref={this.nameInput}
              onChange={this.handleNameChange}
              onBlur={this.validateName}>
            </input>
            <div className="invalid-feedback">{this.state.nameError}</div>
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input
              type="email"
              className={`form-control ${this.state.emailError ? "is-valid" : ""}`}
              id="contactEmail"
              placeholder="contact-name@mailserver.com"
              ref={this.mailInput}
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail} />
          </div>
          <button
            type='submit'
            className='btn btn-success btn-block'>
            Submit
          </button>
        </form>
      </div >
    );
  }
}

export default App;
