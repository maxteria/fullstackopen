import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './stores/store'
import { Provider } from 'react-redux'
import Notification from './components/Notification'
import App from './App'

// store.subscribe(() => {
//   console.log(store.getState())
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Notification />
    <App />
  </Provider>
)
