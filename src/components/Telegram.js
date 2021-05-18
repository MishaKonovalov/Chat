import React from 'react'
import { Routes } from './Routes'

import { SideBar } from './SideBar'
import { Flex } from './UI/Flex'

export const Telegram = () => {
    return (
        <Flex>
            <SideBar />
            <Routes />
        </Flex>
    )
}
