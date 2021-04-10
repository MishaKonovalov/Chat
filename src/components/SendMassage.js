import React from 'react'
import styled from 'styled-components'
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
    flex: 0.9;
    padding: 5px;
`
//Style//

export const SendMassage = () => {
    return (
        <SendMassageSection>
            <Flex p="10px" justify="space-between" alignItems="center">
                <Input type="text" placeholder="Write a massage" />
                <i className="fab fa-telegram-plane"></i>
            </Flex>
        </SendMassageSection>
    )
}
