import { useState, useMemo, useCallback } from 'react'
import Memo from './Memo'

const Test = () => {
  const [state, setState] = useState(0)

  const users = useCallback(() => {
    return {}
  }, [])
  return (
    <div>

      <Memo data={users} status='montaj' />
    </div>
  )
}

export default Test
