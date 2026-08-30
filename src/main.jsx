import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './styles/toast.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
