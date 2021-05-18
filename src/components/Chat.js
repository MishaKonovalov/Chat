import React, { createContext, useContext } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { FirebaseContext } from '..'

import { ChatHeader } from './ChatHeader'
import { SendMassage } from './SendMassage'
import { Talk } from './Talk'
// import { Talk } from './Talk'
import { Flex } from './UI/Flex'
function sliceString(string) {
    const arr = string.slice(1).split('')
    const i = arr.findIndex(
        (latter) => latter === latter.toUpperCase() && latter !== arr[0]
    )
    const newString = [...arr.slice(0, i), ' ', ...arr.slice(i)].join('')
    return newString
}

export const PersonContext = createContext(null)

const Chat = (props) => {
    const name = sliceString(props.match.path)

    const { firestore } = useContext(FirebaseContext)
    const [person] = useDocumentData(firestore.collection('users').doc(name))

    return (
        <PersonContext.Provider value={person}>
            <Flex direction="column">
                <ChatHeader />
                <Talk />
                <SendMassage />
            </Flex>
        </PersonContext.Provider>
    )
}
export default withRouter(Chat)
