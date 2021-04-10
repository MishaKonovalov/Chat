import React from 'react'
import styled from 'styled-components'
import { Massage } from './Massage'
import { Flex } from './UI/Flex'
//Style//

const TalkSection = styled.section`
    border-top: 1px solid rgb(30, 47, 66);
    border-left: 1px solid rgb(30, 47, 66);
    height: 100vh;
    overflow-y: auto;
`
//Style//

export const Talk = () => {
    const items = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        3,
        43434,
        3434,
        3434,
        34,
        34,
        3,
        34,
        34,
        34,
        3,
        34,
        3,
        4,
        34,
    ]
    return (
        <TalkSection>
            <Flex direction="column" justify="end" m="70px 10px 0 10px">
                {items.map((item) => (
                    <Massage />
                ))}
            </Flex>
        </TalkSection>
    )
}
