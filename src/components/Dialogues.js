import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DialoguesContext } from '../App'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'

//Style//

const Datails = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid rgb(30, 47, 66);
    padding: 10px;
    width: 100%;
    position: relative;
    transition: background-color, 0.12s ease-in;
    color: #fff;

    :hover {
        background-color: rgb(0, 160, 255);
    }
    h5 {
        font-weight: 800;
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
const DialoguesSection = styled.div`
    overflow-y: auto;

    a.active {
        background-color: rgb(0, 160, 255);
    }
`
//Style//

export const Dialogues = () => {
    const dialogues = useContext(DialoguesContext)
    return (
        <DialoguesSection>
            <Flex direction="column">
                {dialogues?.map(
                    ({ displayName, photoURL, text, createdAt }) => {
                        const slicedText =
                            text.length > 25 ? text.slice(0, 25) + '...' : text

                        return (
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to={`/${displayName.split(' ').join('')}`}
                                key={createdAt}
                            >
                                <Datails>
                                    <Avatar src={photoURL} />
                                    <Flex
                                        justify="space-between"
                                        direction="column"
                                    >
                                        <h5 className="title">{displayName}</h5>
                                        <p>{slicedText}</p>
                                        <span className="time">18:00</span>
                                    </Flex>
                                </Datails>
                            </NavLink>
                        )
                    }
                )}
            </Flex>
        </DialoguesSection>
    )
}
