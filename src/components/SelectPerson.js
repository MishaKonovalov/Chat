import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FirebaseContext } from '..'
import { Avatar } from './UI/Avatar'
import firebase from 'firebase'
import { Flex } from './UI/Flex'
import { DialoguesContext } from '../App'
//STYLE//
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
    const [user] = useAuthState(auth)
    const dialogues = useContext(DialoguesContext)
    const [persons] = useCollectionData(firestore.collection('users'))

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
        <Flex direction="column" p="0 20px 20px 20px">
            <Flex flex="0" m="15px" justify="space-between">
                <Link to="/">
                    <Icon className="fas fa-chevron-left"></Icon>
                </Link>
                <Paragraph>Всего пользователей: {persons?.length}</Paragraph>
            </Flex>
            <PersonList>
                {persons?.map((person, item) => {
                    return (
                        <Person onClick={() => addDialogues(person)}>
                            <Avatar src={person.photoURL} />
                            <Flex direction="column" justify="center" p="5px">
                                <h5>{person.displayName}</h5>
                                <span>18:00</span>
                            </Flex>
                        </Person>
                    )
                })}
            </PersonList>
        </Flex>
    )
}
