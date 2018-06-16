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
      <div>
        <h3>Trip Options</h3>
        <button onClick={this.toggleEdit}>
        { edit ? 'Hide' : 'Show'} form
        </button>
          { edit ? this.form() : this.show() }
      </div>
    )
  }
}

export default Home;