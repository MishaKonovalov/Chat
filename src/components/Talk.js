import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Massage } from './Massage'
import { Flex } from './UI/Flex'
import { FirebaseContext } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { PersonContext } from './Chat'
//Style//

const TalkSection = styled.section`
    border-top: 1px solid rgb(30, 47, 66);
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 100%;
`
//Style//

export const Talk = () => {
    const messageRef = useRef(null)

    const { auth, firestore } = useContext(FirebaseContext)
    const person = useContext(PersonContext)
    const [user] = useAuthState(auth)

    const [massages] = useCollectionData(
        firestore
            .collection('users')
            .doc(user.displayName)
            .collection('dialogues')
            .doc(person?.displayName)
            .collection('massages')
            .orderBy('createdAt')
    )

    const scrollToBottom = () => {
        messageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => (messageRef.current ? scrollToBottom() : null))

    return (
        <TalkSection>
            <Flex direction="column" m="70px 10px 67px 10px" flex="0">
                {massages?.map((item) => (
                    <React.Fragment key={item.createdAt}>
                        <Massage massage={item} />
                        <div ref={messageRef}></div>
                    </React.Fragment>
                ))}
            </Flex>
        </TalkSection>
    )
}
