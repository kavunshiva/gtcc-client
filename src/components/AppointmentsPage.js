import React from 'react'
import AppointmentsHeaders from './AppointmentsHeaders'
import AppointmentsList from './AppointmentsList'

const AppointmentsPage = (props) => {
  return (
    <div>
      <AppointmentsHeaders />
      <AppointmentsList appointments={props.appointments} getPhysicianById={props.getPhysicianById} />
    </div>
  )
}

export default AppointmentsPage
