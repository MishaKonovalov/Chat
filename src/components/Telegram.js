import React from 'react'
import styled from 'styled-components'
import { Chat } from './Chat'
import { SideBar } from './SideBar'
import { Flex } from './UI/Flex'

export const Telegram = () => {
    return (
        <Flex>
            <SideBar />
            <Chat />
        </Flex>
    )
}
