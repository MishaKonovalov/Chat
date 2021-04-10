import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from './index'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import { SideBar } from './components/SideBar'
import { Chat } from './components/Chat'

//Style//
const AppWrapper = styled.div`
    display: flex;
    background-color: rgb(22, 33, 46);
`
//Style//

function App() {
    const { auth } = useContext(Context)
    const [user, loading] = useAuthState(auth)

    return (
        <Router>
            <AppWrapper>
                <SideBar />
                <Chat />
            </AppWrapper>
        </Router>
    )
}

export default App
