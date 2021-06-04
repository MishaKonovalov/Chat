import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Routes } from './Routes'

import { SideBar } from './SideBar'
const TelegramSection = styled.div`
    display: flex;
    max-height: 100%;
`
export const MobileVersionContext = createContext(null)
export const Telegram = () => {
    const [showSideBar, toggleShowSideBar] = useState(false)
    return (
        <MobileVersionContext.Provider
            value={{ showSideBar, toggleShowSideBar }}
        >
            <TelegramSection>
                <SideBar />
                <Routes />
            </TelegramSection>
        </MobileVersionContext.Provider>
    )
}
