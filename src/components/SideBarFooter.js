import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { FirebaseContext } from '..'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'
//STYLE//
const SideBarFooterSection = styled.div`
    position: fixed;
    width: 25%;
    bottom: 0;
    left: 0;
    border-top: 1px solid rgb(30, 47, 66);
    background-color: rgb(30, 47, 66);
    i {
        font-size: 20px;
        margin: 5px;
        color: rgb(200, 200, 200);
        :hover {
            color: rgb(2, 147, 234);
        }
    }
`

//STYLE//
export const SideBarFooter = () => {
    const { auth } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)

    return (
        <SideBarFooterSection>
            <Flex
                flex="0.25"
                justify="space-between"
                alignItems="center"
                m="8px 15px 8px 15px"
            >
                <Avatar src={user?.photoURL} />

                <i
                    className="fas fa-sign-out-alt"
                    onClick={() => auth.signOut()}
                ></i>
            </Flex>
        </SideBarFooterSection>
    )
}
