import React from 'react'
import styled from 'styled-components'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'

const TitleName = styled.h5`
    color: rgb(2, 147, 234);
`
const Paragraph = styled.p`
    color: #fff;
`

export const Massage = () => {
    return (
        <Flex m="10px 0">
            <Avatar />
            <Flex direction="column" justify="center">
                <TitleName>Name</TitleName>
                <Paragraph>Massage</Paragraph>
            </Flex>
        </Flex>
    )
}
