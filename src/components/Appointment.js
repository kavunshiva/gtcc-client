import React from 'react'
import { Grid, Loader, Popup } from 'semantic-ui-react'
import PhysicianDetail from './PhysicianDetail'

const Appointment = (props) => {
  const { appointment } = props
  const [date, time] = appointment.start.split('T')
  const physician = props.getPhysicianById(appointment.physician_id)
  const duration = (Date.parse(appointment.end) - Date.parse(appointment.start))/60000
  return (
    <Grid columns={4}>
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
        {physician ? <Popup
          trigger={<div>{physician.name}</div>}
          content={<PhysicianDetail physician={physician} />}
          position='bottom center'
          on='hover'
        /> : <Loader active />}
      </Grid.Column>
    </Grid>
  )
}

export default Appointment
