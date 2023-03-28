import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './router'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
