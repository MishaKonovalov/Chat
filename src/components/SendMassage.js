import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

import styled from 'styled-components'
import { FirebaseContext } from '..'
import { Flex } from './UI/Flex'
//Style//
const SendMassageSection = styled.div`
    border-top: 1px solid rgb(30, 47, 66);
    border-left: 1px solid rgb(30, 47, 66);
    background-color: rgb(22, 33, 46);
    position: fixed;
    left: 25%;
    bottom: 0;
    right: 0;
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
`
//Style//

export const SendMassage = () => {
    const { auth, firestore } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)

    const [value, setValue] = useState('')

    const sendMassageToFirestore = async () => {
        await firestore.collection('users').doc(user.displayName).set({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        await firestore.collection(user.displayName).add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setValue('')
    }

    return (
        <SendMassageSection>
            <Flex p="10px" justify="space-between" alignItems="center">
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
        </SendMassageSection>
    )
}
