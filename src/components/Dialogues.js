import React from 'react'
import styled from 'styled-components'
import avatar from '../img/avatar.jpeg'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'

//Style//

const Datails = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid rgb(30, 47, 66);
    padding: 10px;
    margin-top: 5px;
    width: 100%;
    position: relative;
    h5 {
        font-weight: 800;
        color: #fff;
    }
    .massages {
        position: absolute;
        bottom: 2px;
        right: 2px;
        font-size: 13px;
        background-color: rgb(174, 194, 215);
        border-radius: 30%;
        color: rgb(22, 33, 46);
        padding: 5px;
    }
    .time {
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 13px;
    }
`
//Style//

export const Dialogues = () => {
    const items = [1, 2]
    return (
        <Flex direction="column">
            {items.map((item) => {
                return (
                    <Datails>
                        <Avatar />
                        <Flex justify="space-between" direction="column">
                            <h5 className="title">NameName</h5>
                            <p>Massage</p>
                            <span className="time">18:00</span>
                            <span className="massages">43</span>
                        </Flex>
                    </Datails>
                )
            })}
        </Flex>
    )
}
