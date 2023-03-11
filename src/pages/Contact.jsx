import React from 'react'
import Button from '../components/generic/Buttons'

const Contact = () => {
  return (
    <div>
      <h1>contact</h1>
      <Button
        bg={'blue'}
        onClick={() => console.log('hello jurnalist')}
        radius={'14px'}
      >
        to'lash
      </Button>
    </div>
  )
}

export default Contact
