import React, { useContext } from 'react'
import styled from 'styled-components'
import { Flex } from './UI/Flex'
import firebase from 'firebase'
import { FirebaseContext } from '../index'
//Style//
const Logo = styled.i`
    color: rgb(2, 147, 234);
    font-size: 120px;
`
const Button = styled.button`
    padding: 5px 35px;
    margin-top: 30px;
    background-color: rgb(2, 147, 234);
    font-size: 17px;
    color: rgb(22, 33, 46);
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    :hover {
        color: #fff;
    }
`
//Style//

export const Auth = () => {
    const { auth } = useContext(FirebaseContext)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
    }
    return (
        <Flex
            style={{ height: '100vh' }}
            justify="center"
            alignItems="center"
            direction="column"
        >
            <Logo className="fab fa-telegram"></Logo>
            <Button onClick={login}>Sign in</Button>
        </Flex>
    )
}
