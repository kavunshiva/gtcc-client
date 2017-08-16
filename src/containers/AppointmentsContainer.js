import React, { Component } from 'react'
import NavBar from '../components/NavBar.js'
import AppointmentsPage from '../components/AppointmentsPage.js'
import { PhysiciansAdapter } from '../adapters'
import MikeRossImg from '../assets/images/MikeRoss.jpg'
import GregHouseImg from '../assets/images/GregHouse.jpg'

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
      appointments: [
        {
          "id" : 695,
          "patient_id" : 16,
          "physician_id" : 14,
          "start" : "2015-04-24T07:00:00-06:00",
          "end" : "2015-04-24T07:30:00-06:00",
          "created_at" : "2015-04-21T10:44:51-06:00",
          "updated_at" : "2015-04-21T10:44:51-06:00"
        }
      ]
    }
    this.getPhysicianById = this.getPhysicianById.bind(this)
  }

  getPhysicianById(id){
    return this.state.physicians.find(physician => physician.id === id)
  }

  componentDidMount(){
    PhysiciansAdapter.all().then(physicians => {
      this.setState({
        physicians: physicians
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
