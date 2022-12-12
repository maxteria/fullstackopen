import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error" style={{ border: 'solid 1px red', color: 'rgb(255, 0, 0)' }}>
      {message}
    </div>
  )
}

export default Notification
