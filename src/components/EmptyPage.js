import React, { useContext } from 'react'
import styled from 'styled-components'
import { MobileVersionContext } from './Telegram'

//Style//
const EmptyPageSection = styled.section`
    height: 100vh;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 805px) {
        display: ${(props) => (!props.showSideBar ? null : 'none')};
        width: 100%;
    }
`
const Icon = styled.i`
    @media (min-width: 805px) {
        display: none;
    }
    color: rgb(2, 147, 234);
    font-size: 20px;
    position: absolute;
    left: 5%;
    top: 5%;
`
export const Logo = styled.i`
    color: rgb(30, 47, 66);

    font-size: 200px;
`

export const EmptyPage = () => {
    const { showSideBar, toggleShowSideBar } = useContext(MobileVersionContext)

    return (
        <EmptyPageSection showSideBar={showSideBar}>
            <Icon
                onClick={() => toggleShowSideBar(true)}
                className="fas fa-chevron-left"
            />
            <Logo className="fab fa-telegram" />
        </EmptyPageSection>
    )
}
