import React from 'react'
import styled from 'styled-components'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'
//Style//

const TitleName = styled.h5`
    color: rgb(2, 147, 234);
`
const Paragraph = styled.p`
    color: #fff;
`

//Style//

export const Massage = ({ massage }) => {
    const { photoURL, displayName, text } = massage
    return (
        <Flex m="10px 0">
            <Avatar src={photoURL} loading={true} />
            <Flex direction="column" justify="center">
                <TitleName>{displayName}</TitleName>
                <Paragraph>{text}</Paragraph>
            </Flex>
        </Flex>
    )
}
