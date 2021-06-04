import React, { createContext, useContext } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { FirebaseContext } from '..'

import { ChatHeader } from './ChatHeader'
import { SendMassage } from './SendMassage'
import { Talk } from './Talk'
import { MobileVersionContext } from './Telegram'

function sliceString(string) {
    const arr = string.slice(1).split('')
    const i = arr.findIndex(
        (latter) => latter === latter.toUpperCase() && latter !== arr[0]
    )
    const newString = [...arr.slice(0, i), ' ', ...arr.slice(i)].join('')
    return newString
}

export const PersonContext = createContext(null)

const ChatSection = styled.section`
    width: 75%;
    display: flex;
    flex-direction: column;
    @media (max-width: 805px) {
        display: ${(props) => (!props.showSideBar ? null : 'none')};
        width: 100%;
    }
`
const Chat = (props) => {
    const name = sliceString(props.match.path)
    const { showSideBar } = useContext(MobileVersionContext)
    const { firestore } = useContext(FirebaseContext)
    const [person] = useDocumentData(firestore.collection('users').doc(name))

    return (
        <PersonContext.Provider value={person}>
            <ChatSection showSideBar={showSideBar}>
                <ChatHeader />
                <Talk />
                <SendMassage />
            </ChatSection>
        </PersonContext.Provider>
    )
}
export default withRouter(Chat)
