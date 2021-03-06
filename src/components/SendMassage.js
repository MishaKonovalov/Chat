import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

import { FirebaseContext } from '..'
import { Flex } from './UI/Flex'
import { PersonContext } from './Chat'
//Style//
const SendMassageSection = styled.div`
    border-top: 1px solid rgb(30, 47, 66);
    background-color: rgb(22, 33, 46);
    max-height: 67px;
    width: 75%;
    position: fixed;
    bottom: 0;
    right: 0;
    @media (max-width: 805px) {
        width: 100%;
    }
    i {
        font-size: 25px;
        margin: 5px;
        color: rgb(200, 200, 200);
        :hover {
            color: rgb(2, 147, 234);
        }
    }
`
const Input = styled.input`
    border: none;
    outline: none;
    background-color: rgb(22, 33, 46);
    color: #fff;
    flex: 1;
    padding: 5px;
    font-size: 15px;
`
//Style//
export const SendMassage = () => {
    const { auth, firestore } = useContext(FirebaseContext)
    const person = useContext(PersonContext)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const sendMassageToFirestore = (e) => {
        e.preventDefault()
        if (value.length > 0) {
            if (user.uid === person.uid) {
                firestore
                    .collection('users')
                    .doc(user.displayName)
                    .collection('dialogues')
                    .doc(user.displayName)
                    .set({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        text: value,
                        createdAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })

                firestore
                    .collection('users')
                    .doc(user.displayName)
                    .collection('dialogues')
                    .doc(user.displayName)
                    .collection('massages')
                    .add({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        text: value,
                        createdAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })
            } else {
                firestore
                    .collection('users')
                    .doc(person.displayName)
                    .collection('dialogues')
                    .doc(user.displayName)

                    .set({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        text: value,
                        createdAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })

                firestore
                    .collection('users')
                    .doc(user.displayName)
                    .collection('dialogues')
                    .doc(person.displayName)
                    .set({
                        uid: person.uid,
                        displayName: person.displayName,
                        photoURL: person.photoURL,
                        text: value,
                        createdAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })

                firestore
                    .collection('users')
                    .doc(user.displayName)
                    .collection('dialogues')
                    .doc(person.displayName)
                    .collection('massages')
                    .add({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        text: value,
                        createdAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })

                firestore
                    .collection('users')
                    .doc(person.displayName)
                    .collection('dialogues')
                    .doc(user.displayName)
                    .collection('massages')
                    .add({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        text: value,
                        createdAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })
            }

            setValue('')
        }
    }

    return (
        <SendMassageSection>
            <form onSubmit={sendMassageToFirestore}>
                <Flex p="17px" justify="space-between" alignItems="center">
                    <Input
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        type="text"
                        placeholder="Write a massage"
                    />
                    <i
                        onClick={sendMassageToFirestore}
                        className="fab fa-telegram-plane"
                    ></i>
                </Flex>
            </form>
        </SendMassageSection>
    )
}
