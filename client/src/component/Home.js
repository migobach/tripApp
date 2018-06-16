import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( ({ data }) => this.setState({ trips: data }) )
  }

  render() {
    const { trips } = this.state
    return (
      <Fragment>
        <h1>Trips</h1>
        <ul>
        { trips.map( t => 
          <li key={t.id}>
          <Link to={`/trips/${t.id}`}>
          {t.name}
            </Link>
          </li>
          )
        }

        </ul>
      </Fragment>
    )
  }
}

export default Home 