import React, { Component } from 'react';

class App extends Component {
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
              className="form-control"
              id="contactName"
              placeholder="Enter name" />
            <small
              id="contactName"
              className="form-text text-muted">
              Never add a contact with no potential.</small>
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone">The Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="contactPhone"
              placeholder="01294 8331932" />
          </div>
          {/* <button
            type="submit"
            className="btn btn-primary">
            Submit
          </button> */}
        </form>
      </div>
    );
  }
}

export default App;
