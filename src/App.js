import React, { createContext, useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FirebaseContext } from './index'
import styled from 'styled-components'

import { Telegram } from './components/Telegram'
import { Auth } from './components/Auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loading } from './components/UI/Loading'

//Style//
const AppWrapper = styled.div`
    background-color: rgb(22, 33, 46);
    height: 100vh;
`
//Style//

export const DialoguesContext = createContext([])

function App() {
    const [value, setValue] = useState('')
    const { auth, firestore } = useContext(FirebaseContext)
    const [user, loading] = useAuthState(auth)
    const [dialogues, firestoreLoading] = useCollectionData(
        firestore
            .collection('users')
            .doc(user?.displayName)
            .collection('dialogues')
    )
    const filteredDialogues = (dialogues, inputValue) => {
        const str = inputValue.toLowerCase().trim()
        return dialogues?.filter(
            (item) => item.displayName.toLowerCase().indexOf(str) > -1
        )
    }

    if (loading) {
        return <Loading />
    }
    return (
        <DialoguesContext.Provider
            value={{
                value,
                dialogues: filteredDialogues(dialogues, value),
                firestoreLoading,
                setValue,
            }}
        >
            <AppWrapper>{user ? <Telegram /> : <Auth />}</AppWrapper>
        </DialoguesContext.Provider>
    )
}

export default App
