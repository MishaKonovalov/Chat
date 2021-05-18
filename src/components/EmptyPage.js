import React from 'react'
import styled from 'styled-components'
import { Flex } from './UI/Flex'

//Style//
export const Logo = styled.i`
    color: rgba(2, 147, 234, 0.3);
    font-size: 120px;
`

export const EmptyPage = () => {
    return (
        <Flex justify="center" alignItems="center" flex="0.75">
            <Logo className="fab fa-telegram" />
        </Flex>
    )
}
