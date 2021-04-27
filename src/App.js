import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FirebaseContext } from './index'
import styled from 'styled-components'

import { Telegram } from './components/Telegram'
import { Auth } from './components/Auth'

//Style//
const AppWrapper = styled.div`
    background-color: rgb(22, 33, 46);
    height: 100vh;
`
//Style//

function App() {
    const { auth } = useContext(FirebaseContext)
    const [user, loading] = useAuthState(auth)
    return <AppWrapper>{user ? <Telegram /> : <Auth />}</AppWrapper>
}

export default App
