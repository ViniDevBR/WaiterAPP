//REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
//STYLED COMPONENTS
import { GlobalStyles } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)