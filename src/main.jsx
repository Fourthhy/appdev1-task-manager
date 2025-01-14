import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DarkMode from './components/DarkMode.jsx'
import Drop from './components/Drop.jsx'

createRoot(document.getElementById('root')).render(
    <App />,
)
