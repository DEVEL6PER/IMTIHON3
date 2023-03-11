import { memo } from 'react'

const Memorization = ({ data }) => {
  return (
    <div>
      {data().name}
    </div>
  )
}

export default memo(Memorization)
