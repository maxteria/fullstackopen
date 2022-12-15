const notificationReducer = (state = { content: null, time: null }, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const createNotification = (notification, time) => {
  return {
    type: 'SET_NOTIFICATION',
    notification: {
      content: notification,
      time: time
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'SET_NOTIFICATION',
    notification: {
      content: null,
      time: null
    }
  }
}

export default notificationReducer
