import React, { useContext } from 'react'
import styled from 'styled-components'
import { Dialogues } from './Dialogues'
import { SearchPanel } from './SearchPanel'
import { SideBarFooter } from './SideBarFooter'
import { MobileVersionContext } from './Telegram'

//Style//
const SideBarSection = styled.section`
    width: 25%;
    transition: all 0.5s ease-out;
    position: relative;
    left: 0;
    @media (max-width: 805px) {
        width: ${(props) => (props.showSideBar ? '100%' : '0')};
        left: ${(props) => (props.showSideBar ? null : '-100%')};
    }
    border-right: 1px solid rgb(30, 47, 66);
    height: 100vh;
    color: rgb(200, 200, 200);
`
//Style//

export const SideBar = () => {
    const { showSideBar } = useContext(MobileVersionContext)
    return (
        <SideBarSection showSideBar={showSideBar}>
            <SearchPanel />
            <Dialogues />
            <SideBarFooter />
        </SideBarSection>
    )
}
