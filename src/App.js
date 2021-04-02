import React, { useContext } from 'react'
import RouterApp from './components/RouterApp'
import Nav from './components/Nav'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from './index'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Loader } from './components/Loader'

function App() {
    const { auth } = useContext(Context)
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loader />
    }
    return (
        <Router>
            <Nav />
            <RouterApp />
        </Router>
    )
}

export default App
