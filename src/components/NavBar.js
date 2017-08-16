import React, { Component } from 'react'
import { Image, Menu } from 'semantic-ui-react'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      patient: this.props.patient,
      active: 'appointments'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, data){
    this.setState({
      active: data.name
    })
  }

  render(){
    return (
      <Menu>
        <Menu.Item key='patientName' name='patientName' active={this.state.active === 'patientName'} onClick={this.handleClick}>
          <Image src={this.state.patient.image} avatar />
          {`Welcome, ${this.state.patient.name}!`}
        </Menu.Item>
        <Menu.Item key='appointments' name='appointments' active={this.state.active === 'appointments'} onClick={this.handleClick}>
          Appointments
        </Menu.Item>
        <Menu.Item key='logout' name='logout' position='right' active={this.state.active === 'logout'} onClick={this.handleClick}>
          Logout
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
