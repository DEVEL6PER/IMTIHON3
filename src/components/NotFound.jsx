import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 style={{fontSize:'42px'}}>404</h1>
      <h3>XAT0 YERGA KIRDING 0RQAGA QAYT</h3>
      <Button variant='contained' onClick={() => navigate(-1)}>
        go back
      </Button>
    </div>
  )
}

export default NotFound
