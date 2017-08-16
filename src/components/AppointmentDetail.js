import React from 'react'
import { Modal } from 'semantic-ui-react'

const AppointmentDetail = (props) => {
  const { appointment } = props
  return (
      <Modal.Content>
        <Modal.Description><strong>last appointment: </strong>{appointment.last_date}</Modal.Description>
        <Modal.Description><strong>symptoms: </strong>{appointment.symptoms}</Modal.Description>
      </Modal.Content>
  )
}

export default AppointmentDetail
