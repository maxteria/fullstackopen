import { connect } from 'react-redux'
import { useEffect } from 'react'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = (props) => {
  const content = props.notification.content
  const time = props.notification.time

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      props.clearNotification()
    }, time * 1000)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [time, props])

  if (!content) {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div className="notification" style={style}>
      {content}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  clearNotification,
}

const ConnectedNotification = connect(mapStateToProps, mapDispatchToProps)(Notification)
export default ConnectedNotification