import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeContext from './context/ThemeContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <App />
  </ThemeContext>

  
)
