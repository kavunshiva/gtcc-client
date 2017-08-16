import React, { Component } from 'react'
import NavBar from '../components/NavBar.js'
import AppointmentsPage from '../components/AppointmentsPage.js'
import { AppointmentsAdapter, PhysiciansAdapter } from '../adapters'
import MikeRossImg from '../assets/images/MikeRoss.jpg'

export default class AppointmentsContainer extends Component {
  constructor(){
    super()
    this.state = {
      patient: {
        id: 16,
        name: "Mike Ross",
        image: MikeRossImg
      },
      physicians: [],
      appointments: []
    }
    this.getPhysicianById = this.getPhysicianById.bind(this)
  }

  getPhysicianById(id){
    return this.state.physicians.find(physician => physician.id === id)
  }

  componentDidMount(){
    AppointmentsAdapter.all().then(appointments => {
      this.setState({
        appointments: appointments
      })
    })
      .then(() => {
        PhysiciansAdapter.all().then(physicians => {
          this.setState({
            physicians: physicians
          })
        })
      })
  }

  render(){
    return (
      <div>
        <NavBar patient={this.state.patient} />
        <AppointmentsPage appointments={this.state.appointments} getPhysicianById={this.getPhysicianById} />
      </div>
    )
  }
}
