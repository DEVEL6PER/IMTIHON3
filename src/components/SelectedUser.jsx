import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const SelectedUser = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((items) => setData(items))
  }, [])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
      .then((res) => res.json())
      .then((items) => console.log(items))
  }, [])
  return (
    <div>
      <Box sx={{ textAlign: 'center' }}>
        <img src={data.url} alt='' width={'600px'} />
        <h1>{data.title}</h1>
      </Box>
    </div>
  )
}

export default SelectedUser
