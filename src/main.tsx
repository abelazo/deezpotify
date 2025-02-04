import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Login from './login/Login.tsx'
import Dashboard from './user/Dashboard.tsx'

const isLoggedIn = false

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {isLoggedIn ? (
            <Dashboard/>
        ) : (
            <Login/>
        )}
    </StrictMode>,
)
