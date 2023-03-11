import { Box, Button, Container } from '@mui/material'
import { useState } from 'react'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

const App = () => {
  const [navigation, setNavigation] = useState('horizontal')
  return (
    <>
      <Container sx={{ marginTop: '80px' }}>
        <Box>
          <Button
            onClick={() => setNavigation('horizontal')}
            color='success'
            variant='contained'
          >
            horizontal
          </Button>
          <Button onClick={() => setNavigation('vertical')} variant='contained'>
            Vertical
          </Button>
        </Box>
        <Box>
          {navigation === 'horizontal' && <Horizontal />}
          {navigation === 'vertical' && <Vertical />}
        </Box>
      </Container>
    </>
  )
}
export default App
