import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import YouAreTheMoon from './YouAreTheMoon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YouAreTheMoon />
  </StrictMode>,
)
