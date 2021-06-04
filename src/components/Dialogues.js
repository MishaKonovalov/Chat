import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DialoguesContext } from '../App'
import { MobileVersionContext } from './Telegram'
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
        padding-right: 40px;
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
    const { toggleShowSideBar } = useContext(MobileVersionContext)

    const { dialogues } = useContext(DialoguesContext)
    return (
        <DialoguesSection>
            <Flex direction="column">
                {dialogues?.map(
                    ({ displayName, photoURL, text, createdAt, uid }) => {
                        const date = new Date(
                            createdAt?.toDate()
                        ).toLocaleTimeString()

                        const slicedText =
                            text?.length > 25 ? text.slice(0, 25) + '...' : text

                        return (
                            <NavLink
                                onClick={() => toggleShowSideBar(false)}
                                style={{ textDecoration: 'none' }}
                                to={`/${displayName.split(' ').join('')}`}
                                key={uid}
                            >
                                <Datails>
                                    <Avatar src={photoURL} />
                                    <Flex
                                        justify="space-between"
                                        direction="column"
                                    >
                                        <h5 className="title">{displayName}</h5>
                                        <p>{slicedText}</p>
                                        <span className="time">{date}</span>
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
