import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PhysicianDetail = (props) => {
  const { physician } = props
  return (
    <Card>
      <Image src={physician.image} />
      <Card.Content>
        <Card.Header>{physician.name}</Card.Header>
        <Card.Meta>{physician.specialization}</Card.Meta>
        <Card.Description>{physician.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>{physician.education}</Card.Content>
    </Card>
  )
}

export default PhysicianDetail
