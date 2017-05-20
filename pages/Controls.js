import React from 'react'

export default (props) => {
  const { add5, sub5 } = props
  return (
    <div>
      <div>controls</div>
      <div onClick={add5}>add 5</div>
      <div onClick={sub5}>sub 5</div>
    </div>
  )
}
