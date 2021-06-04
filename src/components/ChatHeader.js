import React, { useContext } from 'react'
import styled from 'styled-components'
import { PersonContext } from './Chat'
import { MobileVersionContext } from './Telegram'
// import avatar from '../img/avatar.jpeg'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'

//Style//

const ChatHeaderSection = styled.section`
    width: 100%;
    border-bottom: 1px solid rgb(30, 47, 66);
    color: rgb(200, 200, 200);
    position: fixed;
    top: 0;
    background-color: rgb(22, 33, 46);
    z-index: 2;
    h5 {
        color: #fff;
    }
    i {
        @media (max-width: 805px) {
            display: inline-block;
            margin-right: 15px;
            color: rgb(2, 147, 234);
            font-size: large;
        }
        display: none;
    }
`
//Style//

export const ChatHeader = () => {
    const person = useContext(PersonContext)
    const { toggleShowSideBar } = useContext(MobileVersionContext)
    return (
        <ChatHeaderSection>
            <Flex m="10px" alignItems="center">
                <i
                    onClick={() => toggleShowSideBar(true)}
                    className="fas fa-chevron-left"
                ></i>
                <Avatar src={person?.photoURL} />
                <Flex direction="column" justify="center">
                    <h5>{person?.displayName}</h5>
                </Flex>
            </Flex>
        </ChatHeaderSection>
    )
}
