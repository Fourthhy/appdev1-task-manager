import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewTaskList from './components/NewTaskList.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NewTaskList />
    </StrictMode>
)
