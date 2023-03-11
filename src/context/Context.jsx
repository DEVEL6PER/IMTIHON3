import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [state, setState] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setState(res.data))
  }, [])
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
