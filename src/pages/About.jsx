import { Button, Link as A } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h1>about page</h1>

      <Box sx={{ marginTop: '50px' }}>
        <Button color='success' variant='contained'>
          <Link to={'/about/tel'}>tel</Link>
        </Button>
        <Button color='error' variant='contained'>
          <Link to={'/about/map'}>map</Link>
        </Button>
        <Button color='secondary' variant='contained'>
          <Link to={'/about/address'}>address</Link>
        </Button>
      </Box>
      <Outlet />
    </div>
  )
}

export default About
