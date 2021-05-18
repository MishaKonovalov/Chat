import React, { useContext } from 'react'
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
`
//Style//

export const Talk = () => {
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

    return (
        <TalkSection>
            <Flex direction="column" m="70px 10px 67px 10px">
                {massages?.map((item) => (
                    <Massage massage={item} />
                ))}
            </Flex>
        </TalkSection>
    )
}
