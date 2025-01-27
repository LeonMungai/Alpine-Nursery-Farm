import { StrictMode } from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SITE_NAME } from './config.ts'

document.title = SITE_NAME;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
