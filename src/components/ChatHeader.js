import React, { useContext } from 'react'
import styled from 'styled-components'
import { PersonContext } from './Chat'
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
`
//Style//

export const ChatHeader = () => {
    const person = useContext(PersonContext)
    return (
        <ChatHeaderSection>
            <Flex m="10px">
                <Avatar src={person?.photoURL} />
                <Flex direction="column" justify="center">
                    <h5>{person?.displayName}</h5>
                    <span className="time">last seen 6 min ago</span>
                </Flex>
            </Flex>
        </ChatHeaderSection>
    )
}
