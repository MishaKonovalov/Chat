import React from 'react'
import { ChatHeader } from './ChatHeader'
import { SendMassage } from './SendMassage'
import { Talk } from './Talk'
import { Flex } from './UI/Flex'

export const Chat = () => {
    return (
        <Flex direction="column" flex=".75">
            <ChatHeader />
            <Talk />
            <SendMassage />
        </Flex>
    )
}
