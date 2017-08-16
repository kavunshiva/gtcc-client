import React from 'react'
import { Menu } from 'semantic-ui-react'

const AppointmentsHeaders = () => {
  return (
    <Menu widths={4}>
      <Menu.Item>Date</Menu.Item>
      <Menu.Item>Time</Menu.Item>
      <Menu.Item>Duration</Menu.Item>
      <Menu.Item>Doctor Name</Menu.Item>
    </Menu>
  )
}

export default AppointmentsHeaders
