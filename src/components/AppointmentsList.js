import React from 'react'
import { Grid, Popup } from 'semantic-ui-react'
import PhysicianDetail from './PhysicianDetail'

const AppointmentsList = (props) => {
  const getPhysicianById = (id) => {
    return props.getPhysicianById(id)
  }
  return (
    <div>
      {props.appointments && props.appointments.length > 0 ?
        props.appointments.map(appointment => {
          const [date, time] = appointment.start.split('T')
          const physician = getPhysicianById(appointment.physician_id)
          const duration = (Date.parse(appointment.end) - Date.parse(appointment.start))/60000
          return (
            <Grid columns={4} key={appointment.id}>
              <Grid.Column key={date}>
                {date}
              </Grid.Column>
              <Grid.Column key={time}>
                {time.split('-')[0]}
              </Grid.Column>
              <Grid.Column key={duration}>
                {`${duration} minutes`}
              </Grid.Column>
              <Grid.Column key={appointment.physician_id}>
                <Popup
                  trigger={<div>{physician.name}</div>}
                  content={<PhysicianDetail physician={physician} />}
                  position='bottom center'
                  on='hover'
                />
              </Grid.Column>
            </Grid>
          )
        }) : null
      }
    </div>
  )
}

export default AppointmentsList
