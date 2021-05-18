import React, { createContext, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FirebaseContext } from './index'
import styled from 'styled-components'

import { Telegram } from './components/Telegram'
import { Auth } from './components/Auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

//Style//
const AppWrapper = styled.div`
    background-color: rgb(22, 33, 46);
    height: 100vh;
`
//Style//
export const DialoguesContext = createContext([])
function App() {
    const { auth, firestore } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)
    const [dialogues] = useCollectionData(
        firestore
            .collection('users')
            .doc(user?.displayName)
            .collection('dialogues')
    )
    return (
        <DialoguesContext.Provider value={dialogues}>
            <AppWrapper>{user ? <Telegram /> : <Auth />}</AppWrapper>
        </DialoguesContext.Provider>
    )
}

export default App
