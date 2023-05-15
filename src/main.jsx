import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { store } from './reduxStore/store'
import { Provider } from 'react-redux'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)


//https://gist.github.com/ShariqAnsari88/09dbadfd81c41b399a30f6eb9f1f9548