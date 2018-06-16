import React, { Fragment } from 'react'
import axios from 'axios'

class Locations extends React.Component {
  state = { locations: [], tripName: '' }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}/locations`)
      .then( ({ data }) => this.setState({ locations: data }) )
    
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then( res => this.setState({ tripName: res.data.name }) )
  }

  render() {
    const{ locations, tripName } = this.state
    // const{ thisLocation } = this.props.state.tripName
    return (
      <Fragment>
        <h1>Locations in {tripName} </h1>
        <ul>
          { locations.map( l =>
          <li key={l.id}>
            <h4>{l.title}</h4>
          </li>
          )
        }
        </ul>  
      </Fragment>  
    )
  }
}

export default Locations