import React from 'react'

class TripForm extends React.Component {
  defaultValues = { name: '' }
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault()
    const trip = { ...this.state }
    this.props.submit(trip)
    this.setState({ ...this.defaultValues })
    // debugger
  }

  handleChange = (e) => {
    const { target: {name, value} } = e
    this.setState({ [name]: value })
    // debugger
  }


  render() {
    const { name } = this.state
    return( 
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Enter a new trip"
          value={name}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }

}

export default TripForm