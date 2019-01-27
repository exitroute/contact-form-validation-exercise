import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nameControl: null
    }
  };

  // addContactData = (data) => {
  //     console.log(data);

  //   this.setState((state) => {
  //     state = data;
  //     return state;
  //   });
  // }

  handleNameInputChange = (e) => {
    console.log(this.nameInput.current.value)
    if (this.nameInput.current.value.length < 5) {
      this.setState({ nameControl: false })
    } else {
      this.setState({ nameControl: true })
    }
    // this.addContactData(input);    
  }

  validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleMailInputChange = (e) => {
    let email = this.mailInput.current.value;
    if (this.validateEmail(email)) {
      this.setState({ email: false })
    } else {
      this.setState({ email: true })
    }
    // this.addContactData(input);
  }

  // displayControl = () => {

  //   console.log(this.state.name);

  //   if (this.state.nameControl === null) { let nameInputClass = "form-control"; return nameInputClass }
  //   else if (this.state.nameControl === true) { let nameInputClass = "is-valid"; return nameInputClass }
  //   else if (this.state.nameControl === false) { let nameInputClass = "is-invalid"; return nameInputClass };

  // }

  nameInput = React.createRef();
  mailInput = React.createRef();

  render() {
    return (
      <div className="container">
        <header>
          <h1 className="text-center">
            Form Validation
          </h1>
        </header>
        <form>
          <div className="form-group">
            <label htmlFor="contactName">Name</label>
            <input
              type="text"
              className={
                this.state.nameControl === null
                  ? "form-control" : this.state.nameControl === true
                    ? "form-control is-valid" : "form-control is-invalid"
              }
              id="contactName"
              placeholder="Enter name"
              ref={this.nameInput}
              onChange={this.handleNameInputChange} />
            <small
              id="contactName"
              className="form-text text-muted">
              Never add a contact with no potential.</small>
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input
              type="email"
              className={this.state.email ? " form-control is-invalid" : " form-control is-valid"}
              id="contactEmail"
              placeholder="contact-name@mailserver.com"
              ref={this.mailInput}
              onChange={this.handleMailInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
