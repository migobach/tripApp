import React, { Fragment } from 'react'
import axios from 'axios'

class Locations extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.params.id}`)
      .then( ({ data }) => this.setState({ locations: data }) )
  }

  render() {
    const{ locations } = this.state
    return (
      <Fragment>
        <h1>{ locations }</h1>
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