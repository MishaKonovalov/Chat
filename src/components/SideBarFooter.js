import React, { useContext } from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FirebaseContext } from '..'

import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'
//STYLE// 805px
const SideBarFooterSection = styled.div`
    position: fixed;
    width: 25%;
    bottom: 0;
    left: 0;
    border-top: 1px solid rgb(30, 47, 66);
    background-color: rgb(30, 47, 66);
    z-index: 99;
    i {
        font-size: 20px;
        margin: 5px;
        color: rgb(200, 200, 200);
        :hover {
            color: rgb(2, 147, 234);
        }
    }
    @media (max-width: 805px) {
        width: 100%;
    }
`

//STYLE//
export const SideBarFooter = () => {
    const { auth } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)

    return (
        <SideBarFooterSection>
            <Flex justify="space-between" alignItems="center" p="8px">
                <Avatar src={user?.photoURL} />

                <i
                    className="fas fa-sign-out-alt"
                    onClick={() => auth.signOut()}
                ></i>
            </Flex>
        </SideBarFooterSection>
    )
}
