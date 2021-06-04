import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

import { FirebaseContext } from '..'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'
import { DialoguesContext } from '../App'
import { MobileVersionContext } from './Telegram'
//STYLE//
const SelectPersonSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    flex: 1;

    @media (max-width: 805px) {
        width: 100%;
    }
`
const PersonList = styled.ul`
    list-style: none;
    color: #fff;
    width: 100%;
    cursor: pointer;
`
const Person = styled.li`
    padding: 5px;
    border-bottom: 1px solid rgb(30, 47, 66);
    width: 100%;
    display: flex;
`
const Paragraph = styled.p`
    color: #fff;
`
const Icon = styled.i`
    color: rgb(2, 147, 234);
    font-size: 20px;
`

//STYLE//
export const SelectPerson = () => {
    const { firestore, auth } = useContext(FirebaseContext)
    const { showSideBar, toggleShowSideBar } = useContext(MobileVersionContext)
    const [user] = useAuthState(auth)
    const { dialogues } = useContext(DialoguesContext)
    const [persons] = useCollectionData(firestore.collection('users'))
    useEffect(() => {
        toggleShowSideBar(false)
    })
    const addDialogues = async ({ uid, displayName, photoURL }) => {
        const checkDialoes = dialogues?.some((item) => item.uid === user.uid)
        if (!checkDialoes) {
            await firestore
                .collection('users')
                .doc(displayName)
                .collection('dialogues')
                .doc(displayName)
                .set({
                    uid: uid,
                    displayName: displayName,
                    photoURL: photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
            await firestore
                .collection('users')
                .doc(user.displayName)
                .collection('dialogues')
                .doc(displayName)
                .set({
                    uid: uid,
                    displayName: displayName,
                    photoURL: photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
        }
    }

    return (
        <SelectPersonSection showSideBar={showSideBar}>
            <Flex flex="0" m="15px" justify="space-between">
                <Link to="/">
                    <Icon className="fas fa-chevron-left"></Icon>
                </Link>
                <Paragraph>Всего пользователей: {persons?.length}</Paragraph>
            </Flex>
            <PersonList>
                {persons?.map((person, i) => {
                    return (
                        <Person
                            onClick={() => addDialogues(person)}
                            key={person.uid + i}
                        >
                            <Avatar src={person?.photoURL} />
                            <Flex direction="column" justify="center" p="5px">
                                <h5>{person?.displayName}</h5>
                            </Flex>
                        </Person>
                    )
                })}
            </PersonList>
        </SelectPersonSection>
    )
}
