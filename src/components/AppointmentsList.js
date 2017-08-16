import React from 'react'
import { Grid, Loader, Modal, Popup } from 'semantic-ui-react'
import Appointment from './Appointment'
import AppointmentDetail from './AppointmentDetail'

const AppointmentsList = (props) => {
  return (
    <div>
      {props.appointments && props.appointments.length > 0 ?
        props.appointments.map(appointment => {
          return (
            <Modal
              key={appointment.id}
              trigger={<div><Appointment appointment={appointment} getPhysicianById={props.getPhysicianById} /></div>}
              content={<AppointmentDetail appointment={appointment} />}
              position='bottom center'
              on='click'
            />
          )
        }) : null
      }
    </div>
  )
}

export default AppointmentsList
