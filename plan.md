Notes from:

https://dev.to/nsebhastian/react-form-real-time-validation-using-state-1eeg


component  // used for rendering elememnts 
state // used to keep track of user input  
props // passing data to jsx elements


Basic react form

handleChange = e => {
  this.setState({ value: e.target.value })
}

// ...

<input
  onChange={this.handleChange}
  value={this.state.value}
/>
````

Validation
Displaying errors
Keeping track of form fields
Handling submission

put className attribute {`form-control ${isValidName? "" : "is-valid"}`}

and 

{ isValidName? null: <div className='invalid-feedback'>Name must be longer than 3 characters</div> }

onBlur validates when the user leaves


