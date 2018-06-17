import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TripForm from './TripForm'


class Home extends React.Component {
  state = { trips: [], edit: false }

  componentDidMount() {
    axios.get('/api/trips')
      .then( ({ data }) => this.setState({ trips: data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  deleteTrip = (id) => {
    axios.delete(`/api/trips/${id}`)
    .then( 
      res => this.setState({ trips: res.data }) )
  }



  submit = (trip) => {
    const { trips } = this.state
    axios.post('/api/trips', { trip })
    .then (res => 
      this.setState({
        trips: [res.data, ...trips],
        edit: false
      })
    )
  }

  form() {
    return <TripForm submit={this.submit} />
  }



  show() {
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
            <button onClick={() => this.deleteTrip(t.id)}>
              Delete
            </button>
          </li>
          )
        }
        </ul>
      </Fragment>
    )
  }

  render() {
    const { edit } = this.state
    return (
      <Fragment>
        <h3>Trip Options</h3>
        <button onClick={this.toggleEdit}>
        { edit ? 'Hide' : 'Show'} form
        </button>
          { edit ? this.form() : this.show() }
      </Fragment>
    )
  }
}

export default Home;